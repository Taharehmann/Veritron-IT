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

    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 700);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Build Grand 3D Sphere Network Grid (Futuristic Globe)
    const nodes = [];
    const edges = [];
    const rows = 14; // Latitudinal rings
    const cols = 28; // Longitudinal points
    
    // Scale globe radius dynamically to fill background impressively
    let radius = Math.min(width * 0.45, height * 0.65);
    if (width < 640) radius = width * 0.65;

    const grid = [];
    for (let r = 0; r < rows; r++) {
      grid[r] = [];
      // Span theta from ~15 deg to 165 deg for full spherical dome projection
      const theta = ((r + 0.8) / (rows + 0.6)) * Math.PI;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let c = 0; c < cols; c++) {
        const phi = (c / cols) * Math.PI * 2;
        const x = radius * sinTheta * Math.cos(phi);
        const y = radius * cosTheta;
        const z = radius * sinTheta * Math.sin(phi);

        const nodeIndex = nodes.length;
        const node = {
          x,
          y,
          z,
          origX: x,
          origY: y,
          origZ: z,
          id: nodeIndex,
          // Random pulse flash phase
          pulse: Math.random() * Math.PI * 2,
          isCore: Math.random() > 0.75,
        };
        nodes.push(node);
        grid[r][c] = nodeIndex;
      }
    }

    // Interconnect nodes into geodesic futuristic mesh grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const curr = grid[r][c];
        const nextC = grid[r][(c + 1) % cols];
        edges.push([curr, nextC]);

        if (r < rows - 1) {
          const nextR = grid[r + 1][c];
          edges.push([curr, nextR]);

          // Diagonal lattice cross lines for high-tech network appearance
          if ((r + c) % 2 === 0) {
            const nextRC = grid[r + 1][(c + 1) % cols];
            edges.push([curr, nextRC]);
          }
        }
      }
    }

    // Floating cyber data particles drifting in background
    const bgParticles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * width * 1.2,
      y: (Math.random() - 0.5) * height * 1.2,
      z: (Math.random() - 0.5) * 400,
      size: Math.random() * 2 + 1,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
    }));

    // Data energy pulses traveling along edges
    const dataPulses = Array.from({ length: 25 }, () => ({
      edgeIndex: Math.floor(Math.random() * edges.length),
      progress: Math.random(),
      speed: 0.008 + Math.random() * 0.015,
    }));

    // Mouse tilt interaction tracking
    let targetRotX = 0.2;
    let targetRotY = 0;
    let rotX = 0.2;
    let rotY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = nx * 0.4;
      targetRotX = 0.2 + ny * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      angleY += 0.0035; // Smooth continuous 3D Y-axis rotation
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY + angleY - rotY) * 0.04;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const fov = 500;
      const centerX = width / 2;
      // Position globe so upper curve frames behind text and bottom extends downward
      const centerY = height * 0.55;

      const isDark = C.isDark;

      // 1. Draw Subtle Futuristic Radial Halo & Cyber Dot Grid Backdrop
      const haloGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.1,
        centerX,
        centerY,
        radius * 1.35
      );
      haloGrad.addColorStop(0, isDark ? "rgba(0, 240, 255, 0.18)" : "rgba(37, 99, 235, 0.12)");
      haloGrad.addColorStop(0.4, isDark ? "rgba(14, 165, 233, 0.08)" : "rgba(59, 130, 246, 0.05)");
      haloGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = haloGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Floating Background Data Particles
      bgParticles.forEach((p) => {
        p.y += p.speedY;
        if (p.y > height / 2) p.y = -height / 2;
        if (p.y < -height / 2) p.y = height / 2;

        let px1 = p.x * cosY - p.z * sinY;
        let pz1 = p.z * cosY + p.x * sinY;
        let py2 = p.y * cosX - pz1 * sinX;
        let pz2 = pz1 * cosX + p.y * sinX;

        const scale = fov / (fov + pz2 + 300);
        const screenX = centerX + px1 * scale;
        const screenY = centerY + py2 * scale;

        ctx.fillStyle = isDark
          ? `rgba(56, 189, 248, ${p.alpha * 0.6})`
          : `rgba(37, 99, 235, ${p.alpha * 0.4})`;
        ctx.beginPath();
        ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Project 3D Globe Nodes to 2D
      const projectedNodes = nodes.map((node) => {
        let x1 = node.x * cosY - node.z * sinY;
        let z1 = node.z * cosY + node.x * sinY;
        let y1 = node.y;

        let y2 = y1 * cosX - z1 * sinX;
        let z2 = z1 * cosX + y1 * sinX;

        // Wave dynamics
        const wave = Math.sin(angleY * 3 + node.pulse) * 2;
        y2 += wave;

        const scale = fov / (fov + z2 + 350);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return {
          px,
          py,
          scale,
          z: z2,
          visible: z2 > -320,
          id: node.id,
          isCore: node.isCore,
        };
      });

      // 4. Draw Orbit Tech Rings around Globe
      const drawOrbitRing = (tiltAngle, rScale, colorStr) => {
        ctx.strokeStyle = colorStr;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        const steps = 60;
        for (let i = 0; i <= steps; i++) {
          const a = (i / steps) * Math.PI * 2;
          const rx = Math.cos(a) * radius * rScale;
          const rz = Math.sin(a) * radius * rScale;
          const ry = Math.sin(a * 2 + angleY) * 15;

          let x1 = rx * cosY - rz * sinY;
          let z1 = rz * cosY + rx * sinY;
          let y2 = ry * cosX - z1 * sinX;
          let z2 = z1 * cosX + ry * sinX;

          const scale = fov / (fov + z2 + 350);
          const px = centerX + x1 * scale;
          const py = centerY + y2 * scale;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      };

      drawOrbitRing(0, 1.15, isDark ? "rgba(0, 240, 255, 0.25)" : "rgba(37, 99, 235, 0.18)");
      drawOrbitRing(0.5, 1.28, isDark ? "rgba(56, 189, 248, 0.18)" : "rgba(59, 130, 246, 0.14)");

      // 5. Render Mesh Edges (Lines)
      const lineBaseAlpha = isDark ? 0.5 : 0.45;
      edges.forEach(([i, j]) => {
        const p1 = projectedNodes[i];
        const p2 = projectedNodes[j];

        if (p1.visible && p2.visible) {
          const depthAlpha = Math.max(0.06, Math.min(0.8, (p1.scale + p2.scale) * 0.45 - 0.18));
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.lineWidth = Math.max(0.8, p1.scale * 1.5);
          ctx.strokeStyle = isDark
            ? `rgba(56, 189, 248, ${depthAlpha * lineBaseAlpha * 1.6})`
            : `rgba(37, 99, 235, ${depthAlpha * lineBaseAlpha * 1.4})`;
          ctx.stroke();
        }
      });

      // 6. Render Data Energy Pulses Along Edges
      dataPulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress > 1) {
          pulse.progress = 0;
          pulse.edgeIndex = Math.floor(Math.random() * edges.length);
        }

        const [i, j] = edges[pulse.edgeIndex];
        const p1 = projectedNodes[i];
        const p2 = projectedNodes[j];

        if (p1 && p2 && p1.visible && p2.visible) {
          const pulseX = p1.px + (p2.px - p1.px) * pulse.progress;
          const pulseY = p1.py + (p2.py - p1.py) * pulse.progress;
          const pulseSize = 2.5 * p1.scale;

          ctx.fillStyle = isDark ? "#00f0ff" : "#2563eb";
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
          ctx.fill();

          // Pulse trailing glow
          const pGlow = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, pulseSize * 3);
          pGlow.addColorStop(0, isDark ? "rgba(0, 240, 255, 0.9)" : "rgba(37, 99, 235, 0.8)");
          pGlow.addColorStop(1, "rgba(0, 240, 255, 0)");
          ctx.fillStyle = pGlow;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, pulseSize * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 7. Render Luminous Globe Nodes
      projectedNodes.forEach((p) => {
        if (!p.visible) return;

        const size = Math.max(1.8, p.scale * (p.isCore ? 4.5 : 3.2));
        const nodeAlpha = Math.max(0.2, Math.min(1, p.scale - 0.1));

        // Node Glow Aura
        const glowRad = size * (p.isCore ? 3.2 : 2.4);
        const glow = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, glowRad);
        glow.addColorStop(
          0,
          isDark
            ? `rgba(${p.isCore ? "0, 240, 255" : "56, 189, 248"}, ${nodeAlpha})`
            : `rgba(${p.isCore ? "37, 99, 235" : "59, 130, 246"}, ${nodeAlpha * 0.85})`
        );
        glow.addColorStop(1, "rgba(0, 240, 255, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.px, p.py, glowRad, 0, Math.PI * 2);
        ctx.fill();

        // Node Dot Center
        ctx.fillStyle = isDark ? (p.isCore ? "#ffffff" : "#38bdf8") : p.isCore ? "#ffffff" : "#2563eb";
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
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
  }, [C.isDark]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
