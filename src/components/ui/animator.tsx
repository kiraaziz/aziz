"use client"
import { useEffect, useRef } from "react"

export default function Animator() {

  const observerRef = useRef<IntersectionObserver | null>(null)
  const mutationObserverRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    function initScrollAnimation() {
      if (observer) {
        observer.disconnect()
      }

      const elementsToAnimate = document.querySelectorAll('.to-start-animation')

      if (elementsToAnimate.length === 0) {
        return
      }

      observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('to-start-animation')
              entry.target.classList.add('animate-element')
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -30px 0px',
        },
      )

      elementsToAnimate.forEach((element) => {
        observer?.observe(element)
      })
      observerRef.current = observer
    }

    function handleDOMReady() {
      initScrollAnimation()

      const mainContent = document.getElementById('root')
      if (mainContent) {
        const mutationObserver = new window.MutationObserver((mutations) => {
          let shouldReinit = false

          mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
              mutation.addedNodes.forEach((node: any) => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                  if (
                    node.classList?.contains('to-start-animation') ||
                    node.querySelector?.('.to-start-animation')
                  ) {
                    shouldReinit = true
                  }
                }
              })
            }
          })

          if (shouldReinit) {
            setTimeout(initScrollAnimation, 50)
          }
        })

        mutationObserver.observe(mainContent, {
          childList: true,
          subtree: true,
        })
        mutationObserverRef.current = mutationObserver
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMReady)
    } else {
      handleDOMReady()
    }
    return () => {
      observerRef.current?.disconnect()
      mutationObserverRef.current?.disconnect()
      document.removeEventListener('DOMContentLoaded', handleDOMReady)
    }
  }, [])

  return null
}
