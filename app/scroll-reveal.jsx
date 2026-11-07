'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!('IntersectionObserver' in window) || motionPreference.matches) return

    const pending = new Set()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        pending.delete(entry.target)
        entry.target.classList.remove('reveal-pending')
        if (!motionPreference.matches && !entry.target.matches(':focus-within')) {
          entry.target.classList.add('has-entered')
        }
      }
    }, { rootMargin: '0px 0px 24px 0px' })

    for (const target of document.querySelectorAll('[data-reveal]')) {
      if (target.getBoundingClientRect().top >= window.innerHeight && !target.classList.contains('has-entered')) {
        target.classList.add('reveal-pending')
        pending.add(target)
        observer.observe(target)
      }
    }

    return () => {
      observer.disconnect()
      for (const target of pending) target.classList.remove('reveal-pending')
    }
  }, [])

  return null
}
