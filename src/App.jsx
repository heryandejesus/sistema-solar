import React from "react"
import Planetas from "./components/Planetas/Planetas.jsx"

function App() {
  // Generar estrellas estáticas
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        animationDelay: Math.random() * 3,
        animationDuration: 2 + Math.random() * 4
      });
    }
    return stars;
  };

  const stars = generateStars();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
      {/* Estrellas de fondo */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`
          }}
        />
      ))}

      {/* Nebulosas de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenido de la app */}
      <div className="relative z-10">
        <Planetas />
      </div>

      <style jsx>{`
        @keyframes float {
          0% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.6; 
          }
          100% { 
            transform: translateY(-30px) translateX(10px); 
            opacity: 0.2; 
          }
        }
      `}</style>
    </div>
  )
}

export default App