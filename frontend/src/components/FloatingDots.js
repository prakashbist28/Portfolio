import React, { useRef, useEffect } from "react";

const FloatingDots = ({ dotCount = 80, dotSize = 3, speed = 0.3 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let dots = [];

    const generateDots = () => {
      dots = [];
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      const cols = Math.ceil(Math.sqrt(dotCount));
      const rows = Math.ceil(dotCount / cols);
      const xSpacing = width / cols;
      const ySpacing = height / rows;

      for (let i = 0; i < dotCount; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        dots.push({
          x: col * xSpacing + Math.random() * xSpacing * 0.6,
          y: row * ySpacing + Math.random() * ySpacing * 0.6,
          dx: (Math.random() - 0.5) * speed,
          dy: (Math.random() - 0.5) * speed,
        });
      }
    };

    generateDots(); 

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x > width) dot.x = 0;
        if (dot.x < 0) dot.x = width;
        if (dot.y > height) dot.y = 0;
        if (dot.y < 0) dot.y = height;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = "#34ebc6";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      generateDots();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dotCount, dotSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 bg-black left-0 w-full h-full -z-10"
    />
  );
};

export default FloatingDots;
