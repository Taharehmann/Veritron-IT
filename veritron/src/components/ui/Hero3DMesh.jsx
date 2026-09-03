import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

export default function Hero3DMesh() {
  const canvasRef = useRef(null);
  const C = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth || 800);
    let height = (canvas.height = Math.min(520, Math.max(360, width * 0.5)));

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(520, Math.max(360, width * 0.5));
    };

    window.addEventListener("resize", handleResize);

    // Build 3D Hemisphere / Curved Geometric Dome Network Grid
    const nodes = [];
    const edges = [];
    const rows = 8;
    const cols = 16;
    const radius = Math.min(width * 0.36, 300);

    const grid = [];
    for (let r = 0; r < rows; r++) {
      grid[r] = [];
      const theta = (0.2 + (r / (rows - 1)) * 0.72) * Math.PI;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let c = 0; c < cols; c++) {
        const phi = (c / cols) * Math.PI * 2;
        const x = radius * sinTheta * Math.cos(phi);
        const y = radius * cosTheta + radius * 0.2;
        const z = radius * sinTheta * Math.sin(phi);

        const nodeIndex = nodes.length;
        const node = { x, y, z, origX: x, origY: y, origZ: z, r: 3.5, id: nodeIndex };
        nodes.push(node);
        grid[r][c] = nodeIndex;
      }
    }

    // Connect nodes into geodesic network grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const curr = grid[r][c];
        const nextC = grid[r][(c + 1) % cols];
        edges.push([curr, nextC]);

        if (r < rows - 1) {
          const nextR = grid[r + 1][c];
          edges.push([curr, nextR]);
          
          const nextRC = grid[r + 1][(c + 1) % cols];
          if ((r + c) % 2 === 0) {
            edges.push([curr, nextRC]);
          }
        }
      }
    }

    // Mouse tilt tracking
    let targetRotX = 0.28;
    let targetRotY = 0;
    let rotX = 0.28;
    let rotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.5;
      targetRotX = 0.28 + ny * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.005; // Smooth 3D rotation
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY + angleY - rotY) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const fov = 440;
      const centerX = width / 2;
      const centerY = height * 0.45;

      // Project 3D nodes to 2D
      const projectedNodes = nodes.map((node) => {
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;
        let y1 = node.y;

        let y2 = y1 * cosX - z1 * sinX;
        let z2 = z1 * cosX + y1 * sinX;

        // Wave oscillation
        const wave = Math.sin(angleY * 2.2 + node.id * 0.4) * 2.5;
        y2 += wave;

        const scale = fov / (fov + z2 + 280);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return {
          px,
          py,
          scale,
          z: z2,
          visible: z2 > -260,
          id: node.id
        };
      });

      const isDark = C.bg === "#1E1E22";
      const lineAlpha = isDark ? 0.45 : 0.55;

      // Draw light globe backdrop radial halo matching the reference image
      const haloGrad = ctx.createRadialGradient(centerX, centerY, radius * 0.15, centerX, centerY, radius * 1.05);
      haloGrad.addColorStop(0, isDark ? "rgba(56, 189, 248, 0.16)" : "rgba(37, 99, 235, 0.1)");
      haloGrad.addColorStop(0.5, isDark ? "rgba(59, 130, 246, 0.06)" : "rgba(59, 130, 246, 0.04)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Render Edges
      ctx.lineWidth = isDark ? 1.2 : 1.4;
      edges.forEach(([i, j]) => {
        const p1 = projectedNodes[i];
        const p2 = projectedNodes[j];

        if (p1.visible && p2.visible) {
          const depthAlpha = Math.max(0.1, Math.min(0.75, (p1.scale + p2.scale) * 0.4 - 0.15));
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = isDark
            ? `rgba(96, 165, 250, ${depthAlpha * lineAlpha * 1.8})`
            : `rgba(37, 99, 235, ${depthAlpha * lineAlpha * 1.6})`;
          ctx.stroke();
        }
      });

      // Render Nodes with glowing aura
      projectedNodes.forEach((p) => {
        if (!p.visible) return;

        const size = Math.max(2, p.scale * 4);
        const nodeAlpha = Math.max(0.25, Math.min(1, p.scale - 0.15));

        // Outer glow
        const glowRad = size * 2.8;
        const glow = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, glowRad);
        glow.addColorStop(0, isDark ? `rgba(125, 211, 252, ${nodeAlpha})` : `rgba(37, 99, 235, ${nodeAlpha * 0.8})`);
        glow.addColorStop(1, "rgba(37, 99, 235, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.px, p.py, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Hexagon or circle node point
        ctx.fillStyle = isDark ? "#ffffff" : "#2563eb";
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();

        // Inner core point
        ctx.fillStyle = isDark ? "#38bdf8" : "#93c5fd";
        ctx.beginPath();
        ctx.arc(p.px, p.py, size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [C.bg]);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "auto", display: "block", pointerEvents: "auto", cursor: "grab" }} />
    </div>
  );
}
