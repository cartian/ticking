import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for animating a number from start to end with easing
 * @param from - Starting value
 * @param to - Ending value
 * @param duration - Animation duration in milliseconds
 * @param isAnimating - Trigger to start animation
 * @returns Current animated value
 */
export function useTickingNumber(
  from: number,
  to: number,
  duration: number,
  isAnimating: boolean
): number {
  const [currentValue, setCurrentValue] = useState<number>(from);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Don't animate if not triggered
    if (!isAnimating) {
      setCurrentValue(from);
      return;
    }

    // Handle edge cases
    if (duration <= 0 || from === to) {
      setCurrentValue(to);
      return;
    }

    // Reset start time
    startTimeRef.current = null;

    // Ease-out-quart easing function (smooth, pronounced slowdown at the end)
    // This creates a fast start that gradually decelerates, giving a clear fast -> slow ticking effect
    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    // Animation loop
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing
      const easedProgress = easeOutQuart(progress);

      // Calculate current value
      const value = from + (to - from) * easedProgress;
      setCurrentValue(value);

      // Continue animation or finish
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Snap to final value
        setCurrentValue(to);
      }
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [from, to, duration, isAnimating]);

  return currentValue;
}
