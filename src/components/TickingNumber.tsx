import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTickingNumber } from '../hooks/useTickingNumber';
import { formatNumber } from '../utils/formatNumber';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
`;

const NumberDisplay = styled.div`
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Inter', monospace;
`;

const AnimateButton = styled.button<{ $disabled: boolean }>`
  padding: 10px 20px;
  font-size: 1em;
  font-family: 'Inter', sans-serif;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
`;

interface TickingNumberProps {
  /** Initial value (default: 0) */
  from?: number;
  /** Final value (required) */
  to: number;
  /** Animation duration in ms (default: 2000) */
  duration?: number;
  /** Decimal places (default: 2) */
  decimals?: number;
  /** Whether to display as percentage (default: false) */
  isPercentage?: boolean;
  /** Reset delay in seconds (default: 3) */
  resetDelay?: number;
}

/**
 * TickingNumber component - displays an animated number that ticks from initial to final value
 */
export function TickingNumber({
  from = 0,
  to,
  duration = 2000,
  decimals = 2,
  isPercentage = false,
  resetDelay = 3
}: TickingNumberProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const currentValue = useTickingNumber(from, to, duration, isAnimating);
  const animationStartTimeRef = useRef<number | null>(null);

  // Track when animation starts
  useEffect(() => {
    if (isAnimating && !animationStartTimeRef.current) {
      animationStartTimeRef.current = Date.now();
    }
  }, [isAnimating]);

  // Start countdown timer after animation completes
  useEffect(() => {
    if (!isAnimating || !animationStartTimeRef.current) return;

    const animationEndTime = animationStartTimeRef.current + duration;
    const now = Date.now();

    // Wait for animation to complete
    if (now < animationEndTime) {
      const remainingAnimationTime = animationEndTime - now;
      const timeout = setTimeout(() => {
        setCountdown(resetDelay);
      }, remainingAnimationTime);
      return () => clearTimeout(timeout);
    } else {
      // Animation already complete, start countdown immediately
      setCountdown(resetDelay);
    }
  }, [isAnimating, duration, resetDelay]);

  // Countdown timer
  useEffect(() => {
    if (countdown === null || countdown <= 0) {
      if (countdown === 0) {
        // Reset animation state
        setIsAnimating(false);
        setCountdown(null);
        animationStartTimeRef.current = null;
      }
      return;
    }

    const interval = setInterval(() => {
      setCountdown(prev => (prev !== null ? prev - 1 : null));
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const handleAnimate = () => {
    setIsAnimating(true);
    setCountdown(null);
  };

  const formattedValue = formatNumber(currentValue, decimals);
  const displayValue = isPercentage ? `${formattedValue}%` : formattedValue;

  const getButtonText = () => {
    if (!isAnimating) return 'Animate';
    if (countdown !== null && countdown > 0) return `Reset in ${countdown}s`;
    return 'Completed';
  };

  return (
    <Container>
      <NumberDisplay>{displayValue}</NumberDisplay>
      <AnimateButton
        onClick={handleAnimate}
        disabled={isAnimating}
        $disabled={isAnimating}
      >
        {getButtonText()}
      </AnimateButton>
    </Container>
  );
}
