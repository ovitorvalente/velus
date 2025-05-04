"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

export function ParticlesContainer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    // Initialize particles
    const initParticles = () => {
      particles.current = []
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 25000), 60)

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * 0.3 - 0.15,
          color: getRandomColor(),
          alpha: Math.random() * 0.3 + 0.1,
        })
      }
    }

    // Atualizar as cores das partículas para o tema preto e branco com laranja
    const getRandomColor = () => {
      const colors = ["#ffffff", "#f97316", "#d4d4d4"]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()

        // Connect particles within range
        connectParticles(particle, index)

        // Attract particles to mouse
        attractToMouse(particle)
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    const connectParticles = (particle: Particle, index: number) => {
      for (let i = index + 1; i < particles.current.length; i++) {
        const otherParticle = particles.current[i]
        const distance = Math.hypot(particle.x - otherParticle.x, particle.y - otherParticle.y)

        if (distance < 100) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(otherParticle.x, otherParticle.y)
          ctx.strokeStyle = particle.color
          ctx.globalAlpha = 0.05 * (1 - distance / 100)
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    const attractToMouse = (particle: Particle) => {
      const dx = mousePosition.current.x - particle.x
      const dy = mousePosition.current.y - particle.y
      const distance = Math.hypot(dx, dy)

      if (distance < 150) {
        const forceDirectionX = dx / distance
        const forceDirectionY = dy / distance
        const force = (150 - distance) / 2000
        particle.speedX += forceDirectionX * force
        particle.speedY += forceDirectionY * force
      }

      // Add some friction to prevent particles from accelerating too much
      particle.speedX *= 0.98
      particle.speedY *= 0.98
    }

    // Initialize
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    handleResize()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />
}
