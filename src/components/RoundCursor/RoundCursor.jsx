import { useEffect, useState } from "react";

function RoundCursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="w-6 h-6 bg-white rounded-full fixed pointer-events-none mix-blend-difference transition-transform duration-75 z-[100]"
      style={{ left: mouseX, top: mouseY, transform: "translate(-50%, -50%)" }}
    />
  );
}

export default RoundCursor;
