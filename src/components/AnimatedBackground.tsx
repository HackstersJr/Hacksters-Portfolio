"use client"

import { useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

export default function AnimatedBackground() {
  const [speed] = useState(1.0)

  return (
    <div className="fixed inset-0 w-full h-screen bg-black -z-10 overflow-hidden">
      {/* Mesh Gradient Base */}
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#ffffffff", "#0a0a0a", "#0d1117", "#0e2a3a"]}
        speed={speed * 0.5}
      />

      {/* Lighting overlay effects - matching the reference */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-gray-900/3 rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>
    </div>
  )
}
