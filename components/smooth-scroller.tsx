"use client"

import { useEffect } from 'react'

export function SmoothScroller() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')

    function handleClick(event: MouseEvent) {
      // Don't scroll to top if href is just "#"
      if ((event.currentTarget as HTMLAnchorElement).getAttribute('href') === '#') {
        return
      }
      
      event.preventDefault()
      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1)
      if (!targetId) return
      
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }

    links.forEach(link => {
      // Make sure it's a link to an element on the same page
      if (link.pathname === window.location.pathname) {
        link.addEventListener('click', handleClick as EventListener)
      }
    })

    // Cleanup function to remove event listeners
    return () => {
      links.forEach(link => {
        if (link.pathname === window.location.pathname) {
          link.removeEventListener('click', handleClick as EventListener)
        }
      })
    }
  }, []) // Empty dependency array ensures this runs only once on the client

  return null // This component does not render anything
}
