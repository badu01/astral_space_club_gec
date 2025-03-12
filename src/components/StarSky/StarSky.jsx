import { useRef, useEffect } from "react";

function StarSky() {

    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const stars = [];
      const shootingStars = [];
      const numStars = 200;
  
 
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, 
          radius: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.5,
        });
      }
  

      const addShootingStar = () => {
        shootingStars.push({
          x: Math.random() * canvas.width, 
          y: Math.random() * canvas.height / 2,
          length: Math.random() * 100 + 50, 
          speed: Math.random() * 6 + 4, 
          angle: Math.random() * Math.PI / 6 - Math.PI / 12, 
          opacity: 1,
        });
      };
  
   
      const draw = () => {
   
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
   
        ctx.fillStyle = "white";
        for (const star of stars) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
  
      
          star.y += star.speed;
  

          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        }
  
   
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const shootingStar = shootingStars[i];
          ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x - shootingStar.length * Math.cos(shootingStar.angle),
            shootingStar.y + shootingStar.length * Math.sin(shootingStar.angle)
          );
          ctx.stroke();
  

          shootingStar.x += shootingStar.speed * Math.cos(shootingStar.angle);
          shootingStar.y -= shootingStar.speed * Math.sin(shootingStar.angle);
          shootingStar.opacity -= 0.02; 
      
          if (shootingStar.opacity <= 0) {
            shootingStars.splice(i, 1);
          }
        }
  
      
        requestAnimationFrame(draw);
      };
  
 
      draw();
  
    
      const shootingStarInterval = setInterval(addShootingStar, 2000);
  
     
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
  
  
      return () => {
        clearInterval(shootingStarInterval);
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <canvas ref={canvasRef} className="block bg-black fixed -z-50"/>
  )
}

export default StarSky