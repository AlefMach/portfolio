import { Box, useTheme } from "@mui/material";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const mode = theme.palette.mode;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const color = mode === "dark" ? 0x00ffc2 : 0x5b5bd6;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 1),
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      }),
    );
    icosahedron.position.x = 2.2;
    scene.add(icosahedron);

    const shard = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.8, 0),
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      }),
    );
    shard.position.set(-0.4, 2.5, -1);
    scene.add(shard);

    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color,
        size: 0.045,
        transparent: true,
        opacity: 0.6,
      }),
    );
    scene.add(particles);

    let frameId = 0;
    const mouse = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    const handlePointerMove = (event: PointerEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handlePointerMove);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!prefersReducedMotion) {
        targetRotation.x += (mouse.y * 0.35 - targetRotation.x) * 0.05;
        targetRotation.y += (mouse.x * 0.5 - targetRotation.y) * 0.05;

        icosahedron.rotation.x += 0.0025 - targetRotation.x * 0.02;
        icosahedron.rotation.y += 0.0035 - targetRotation.y * 0.02;
        shard.rotation.x -= 0.003 - targetRotation.x * 0.015;
        shard.rotation.y += 0.002 - targetRotation.y * 0.015;
        particles.rotation.y += 0.0008;

        camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.05;
        camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      renderer.dispose();
      icosahedron.geometry.dispose();
      shard.geometry.dispose();
      particlesGeometry.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [mode]);

  return (
    <Box
      ref={containerRef}
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.9,
      }}
    />
  );
}
