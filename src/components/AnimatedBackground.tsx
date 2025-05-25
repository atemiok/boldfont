'use client'

import { useEffect, useState } from 'react'

const backgrounds = [
  '/bg1.webp',
  '/bg2.webp',
  '/bg3.webp',
  '/bg4.webp',
  '/bg5.webp'
]

export default function AnimatedBackground() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${bg})`,
            opacity: index === currentIndex ? 1 : 0,
            transform: `scale(${index === currentIndex ? 1 : 1.1})`,
            transition: 'opacity 1s ease-in-out, transform 1s ease-in-out'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
    </div>
  )
} 