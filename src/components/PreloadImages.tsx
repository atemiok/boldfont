'use client'

import { useEffect } from 'react'
import Head from 'next/head'

const backgrounds = [
  '/bg1.webp',
  '/bg2.webp',
  '/bg3.webp',
  '/bg4.webp',
  '/bg5.webp'
]

export default function PreloadImages() {
  useEffect(() => {
    // Add preload links to head
    backgrounds.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  return null
} 