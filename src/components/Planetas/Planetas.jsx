import React, { useState } from "react"
import { motion } from "framer-motion"

import mercurio from "../../assets/mercurio.jpg"
import venus from "../../assets/venus.jpg"
import tierra from "../../assets/tierra.jpg"
import marte from "../../assets/marte.jpg"
import jupiter from "../../assets/jupiter.jpg"
import saturno from "../../assets/saturno.jpg"
import urano from "../../assets/urano.png"
import neptuno from "../../assets/neptuno.jpg"

const planetas = [
  { nombre: "Mercurio", gravedad: 0.38, imagen: mercurio, desc: "El planeta más cercano al Sol." },
  { nombre: "Venus", gravedad: 0.91, imagen: venus, desc: "El planeta más caliente." },
  { nombre: "Tierra", gravedad: 1, imagen: tierra, desc: "Nuestro hogar." },
  { nombre: "Marte", gravedad: 0.38, imagen: marte, desc: "El planeta rojo." },
  { nombre: "Júpiter", gravedad: 2.34, imagen: jupiter, desc: "El planeta más grande." },
  { nombre: "Saturno", gravedad: 1.06, imagen: saturno, desc: "Famoso por sus anillos." },
  { nombre: "Urano", gravedad: 0.92, imagen: urano, desc: "Gira de lado." },
  { nombre: "Neptuno", gravedad: 1.19, imagen: neptuno, desc: "El planeta más ventoso." }
]

export default function Planetas() {
  const [peso, setPeso] = useState("")
  const [activo, setActivo] = useState(null) // planeta seleccionado

  return (
    <div className="p-6 text-center text-white">
      <h1 className="text-4xl font-bold mb-6">Sistema Solar 🌌</h1>
      
      <input
        type="number"
        placeholder="Tu peso en kg"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        className="p-2 rounded bg-white text-black mb-8"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {planetas.map((p, i) => (
          <motion.div
            key={p.nombre}
            className="relative bg-gray-500/30 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.2 }}
            onClick={() => setActivo(activo === i ? null : i)}
          >
            <img src={p.imagen} alt={p.nombre} className="w-80 h-60 mx-auto mb-4 object-contain" />
            <h2 className="text-xl font-semibold">{p.nombre}</h2>

            {peso && (
              <p className="mt-2 font-bold text-yellow-400">
                Peso aquí: {(peso * p.gravedad).toFixed(1)} kg
              </p>
            )}

            {/* Cartelito de información */}
            {activo === i && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm rounded-lg p-3 w-64 shadow-lg"
              >
                {p.desc}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
