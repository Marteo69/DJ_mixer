import { useEffect, useRef, useState } from 'react'
import '../css/FadeIn.css'

export default function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsVisible(true);

        observer.unobserve(domRef.current)
      }
    })  

    const currElement = domRef.current;
    if (currElement) {
      observer.observe(currElement)
    }

    return () => {
      if (currElement) {
        observer.unobserve(currElement)
      }
    }
  }, [])

  return(
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
    </div>
  )
}