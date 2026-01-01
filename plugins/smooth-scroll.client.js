// plugins/smooth-scroll.client.js
// Letakkan file ini di folder /plugins/

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    
    // Setup Smooth Scroll
    ScrollSmoother.create({
      smooth: 1.5,              // Smoothness level (1 = normal, 2 = more smooth)
      effects: true,            // Enable data-speed parallax effects
      smoothTouch: 0.1,         // Smooth scroll on touch devices
      normalizeScroll: true,    // Normalize scroll across different browsers
      ignoreMobileResize: true, // Ignore resize on mobile
    })

    // Optional: Custom ease for scroll
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.8
    })

    console.log('✅ Smooth Scroll Initialized')
  }
})