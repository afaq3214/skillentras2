'use client'
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<any>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e:any) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const hoverElements = document.querySelectorAll('.hoverable');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <img
  ref={cursorRef}
  src={isHovering ? '/cursor.png' : '/cursor.png'} // Adjusted for clarity
  alt="Custom Cursor"
  className="hidden sm:block" // Hide by default, show on sm and above
  style={{
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 9999,
    width: isHovering ? '48px' : '32px',
    height: isHovering ? '48px' : '32px',
    transform: 'translate(-50%, -50%)',
  }}
/>
  );
}