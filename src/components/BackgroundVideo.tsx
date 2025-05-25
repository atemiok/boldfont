'use client'

import { useEffect, useRef, useState } from 'react'

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      console.log('Video can play')
      setIsLoading(false)
      video.play()
        .then(() => {
          console.log('Video started playing')
          setIsPlaying(true)
        })
        .catch(err => {
          console.error('Play failed:', err)
          setError(err.message)
        })
    }

    const handlePlay = () => {
      console.log('Video is playing')
      setIsPlaying(true)
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      setError('Failed to load video')
      setIsLoading(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('play', handlePlay)
    video.addEventListener('error', handleError)

    // Force load the video
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <>
      {/* Debug overlay */}
      <div className="fixed top-0 left-0 bg-black/80 text-white p-2 z-50 text-xs">
        Status: {isLoading ? 'Loading' : isPlaying ? 'Playing' : error ? 'Error' : 'Ready'}
      </div>

      {/* Video container */}
      <div className="fixed inset-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="/installations.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-primary/70 backdrop-blur-[2px]"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Loading and error states */}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="text-white">Loading video...</div>
        </div>
      )}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="text-white">Error: {error}</div>
        </div>
      )}
    </>
  )
} 