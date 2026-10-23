import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0c1524, 0.0022);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 48);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Architectural Contour Terrain (Organic Sine-Cosine Mountain/Wave)
    const terrainWidth = 140;
    const terrainHeight = 140;
    const segments = 48;
    const gridGeometry = new THREE.PlaneGeometry(terrainWidth, terrainHeight, segments, segments);
    const pos = gridGeometry.attributes.position;
    const initialZ = new Float32Array(pos.count);

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i) * 0.06;
      const v = pos.getY(i) * 0.06;
      const z = Math.sin(u) * Math.cos(v) * 5.5 + Math.sin(u * 1.5 + v * 0.8) * 2.8;
      pos.setZ(i, z);
      initialZ[i] = z;
    }
    gridGeometry.computeVertexNormals();

    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
    });
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial);
    gridMesh.rotation.x = -Math.PI / 2.3;
    gridMesh.position.set(0, -16, -10);
    scene.add(gridMesh);

    // 3. Multi-Tier Floating 3D Contour Spline Curves
    const contourSplinesGroup = new THREE.Group();
    const splineColors = [0x38bdf8, 0x7dd3fc, 0x94a3b8, 0x67e8f9];

    const createContourSpline = (radius, yPos, color, freq = 3, amp = 2.4) => {
      const points = [];
      const steps = 80;
      for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const r = radius + Math.sin(theta * freq) * amp;
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        const y = Math.sin(theta * 2) * 1.8;
        points.push(new THREE.Vector3(x, y, z));
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.32,
        linewidth: 1.5,
      });
      const line = new THREE.Line(geom, mat);
      line.position.y = yPos;
      return line;
    };

    const spline1 = createContourSpline(20, 6, splineColors[0], 3, 2.8);
    const spline2 = createContourSpline(28, -2, splineColors[1], 4, 3.2);
    const spline3 = createContourSpline(36, -10, splineColors[2], 5, 3.6);
    const spline4 = createContourSpline(44, -18, splineColors[3], 3, 4.0);

    contourSplinesGroup.add(spline1, spline2, spline3, spline4);
    contourSplinesGroup.rotation.x = 0.4;
    scene.add(contourSplinesGroup);

    // 4. Floating 3D Geometric Nodes & Data Constellation Particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 110;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 70;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 70;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    // Smooth glowing canvas dot texture
    const dotCanvas = document.createElement("canvas");
    dotCanvas.width = 32;
    dotCanvas.height = 32;
    const ctx = dotCanvas.getContext("2d");
    const radGrad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    radGrad.addColorStop(0, "rgba(255, 255, 255, 1)");
    radGrad.addColorStop(0.25, "rgba(56, 189, 248, 0.85)");
    radGrad.addColorStop(1, "rgba(56, 189, 248, 0)");
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 32, 32);
    const dotTexture = new THREE.CanvasTexture(dotCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.4,
      map: dotTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // 5. Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Smooth Scroll Tracking & Velocity
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;
    let scrollVelocity = 0;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // 7. Responsive Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 8. Animation & Choreography Loop
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth scroll interpolation
      const prevScroll = currentScroll;
      currentScroll += (targetScroll - currentScroll) * 0.08;
      scrollVelocity = (currentScroll - prevScroll) * 0.05;

      const totalDocHeight = Math.max(
        document.body.scrollHeight - window.innerHeight,
        1
      );
      const scrollRatio = Math.min(Math.max(currentScroll / totalDocHeight, 0), 1);

      // Camera responds dynamically to scroll & mouse
      const targetCamX = mouseX * 5 + Math.sin(scrollRatio * Math.PI * 2) * 8;
      const targetCamY = 10 - mouseY * 4 - scrollRatio * 20;
      const targetCamZ = 48 - scrollRatio * 18 + Math.abs(scrollVelocity) * 2;

      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;
      camera.lookAt(0, -scrollRatio * 12, 0);

      // Rotate splines with scroll and time
      contourSplinesGroup.rotation.z = elapsed * 0.06 + scrollRatio * 1.5;
      contourSplinesGroup.rotation.y = elapsed * 0.03 + scrollRatio * 2.0;

      // Animate undulating terrain waves
      const pAttr = gridGeometry.attributes.position;
      for (let i = 0; i < pAttr.count; i++) {
        const u = pAttr.getX(i) * 0.06;
        const v = pAttr.getY(i) * 0.06;
        const wave =
          Math.sin(u + elapsed * 0.9 + scrollRatio * 4) *
          Math.cos(v + elapsed * 0.7 + scrollRatio * 3) *
          4.2;
        pAttr.setZ(i, initialZ[i] + wave);
      }
      pAttr.needsUpdate = true;

      // Rotate particle constellation
      particleSystem.rotation.y = elapsed * 0.02 + scrollRatio * 0.8;
      particleSystem.rotation.x = Math.sin(elapsed * 0.015) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridGeometry.dispose();
      gridMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.9,
      }}
      aria-hidden="true"
    />
  );
}
