import { useEffect, useRef, useState, ReactNode } from 'react';
// @ts-ignore
interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
  offset?: number; // NEW: Y offset in px
}

const FadeInUp = ({
  children,
  className = 'h-100',
  delay = 200,
  triggerOnce = true,
  offset = 20, // default to 20px
}: FadeInUpProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, triggerOnce]);

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? 'show' : ''} ${className}`}
      style={{
        '--fade-in-up-offset': `${offset}px`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
