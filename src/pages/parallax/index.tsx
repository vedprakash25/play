import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./style.css";

const ParallaxEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const layer1 = layer1Ref.current!;
    const layer2 = layer2Ref.current!;

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const offsetX = mouseX / container.offsetWidth - 0.5;
      const offsetY = mouseY / container.offsetHeight - 0.5;
      const layer1X = offsetX * 200;
      const layer1Y = offsetY * 200;
      const layer2X = offsetX * 300;
      const layer2Y = offsetY * 300;

      gsap.to(layer1, { x: layer1X, y: layer1Y, duration: 1 });
      gsap.to(layer2, { x: layer2X, y: layer2Y, duration: 1 });
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="parallax-container h-96 border-white border-2"
      ref={containerRef}
    >
      <div className="parallax-layer layer-1" ref={layer1Ref}></div>
      <div className="parallax-layer layer-2" ref={layer2Ref}></div>
    </div>
  );
};

export default ParallaxEffect;
