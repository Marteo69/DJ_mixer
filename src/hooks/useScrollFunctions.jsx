import { useEffect, useState } from "react";


export function useScrollProgress(maxScroll=300) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      let progress = currentScroll / maxScroll;

      if (progress > 1) progress = 1;

      setScrollProgress(progress);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    
  }, [maxScroll])

  return scrollProgress;
}
