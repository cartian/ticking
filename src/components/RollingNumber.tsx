import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const RollingNumberContainer = styled.span`
  display: inline-flex;
  font-variant-numeric: tabular-nums;
`;

const Digit = styled.span<{ value: string }>`
  width: 1ch;
  overflow: hidden;
  display: inline-flex;
  position: relative;

  .value {
    color: transparent;
    position: relative;
  }

  .scale {
    user-select: none;
    position: absolute;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform var(--roll-duration, 1s);
  }

  .scale span:last-child {
    /* the minus (-) */
    position: absolute;
    bottom: -10%;
    left: 0;
  }

  ${props => {
    const valueMap: { [key: string]: string } = {
      '\u200B': 'translateY(10%)',
      '0': 'translateY(0)',
      '1': 'translateY(-10%)',
      '2': 'translateY(-20%)',
      '3': 'translateY(-30%)',
      '4': 'translateY(-40%)',
      '5': 'translateY(-50%)',
      '6': 'translateY(-60%)',
      '7': 'translateY(-70%)',
      '8': 'translateY(-80%)',
      '9': 'translateY(-90%)',
      '-': 'translateY(-100%)',
    };
    return `
      .scale {
        transform: ${valueMap[props.value] || 'translateY(0)'};
      }
    `;
  }}
`;

interface RollingNumberProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

function toDigits(num: number, size = 0): string[] {
  const result = Number.isNaN(num) ? [] : num.toString().split('');
  const padSize = Math.max(0, size - result.length);
  return [...Array(padSize).fill('\u200B'), ...result];
}

function toSize(num: number): number {
  return Number.isNaN(num) ? 0 : num.toString().length;
}

export const RollingNumber: React.FC<RollingNumberProps> = ({
  from = 0,
  to,
  duration = 1000,
  className,
  style,
}) => {
  const [currentValue, setCurrentValue] = useState(from);
  const [displaySize, setDisplaySize] = useState(toSize(from));
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const targetSize = toSize(to);
    if (targetSize > displaySize) {
      setDisplaySize(targetSize);
      // Small delay to allow size change to render first
      setTimeout(() => {
        setCurrentValue(to);
      }, 50);
    } else {
      setCurrentValue(to);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [to, displaySize]);

  const digits = toDigits(currentValue, displaySize);

  return (
    <RollingNumberContainer
      className={className}
      style={{
        ...style,
        '--roll-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {digits.map((digit, index) => (
        <Digit key={index} value={digit}>
          <span className="scale" aria-hidden="true">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>-</span>
          </span>
          <span className="value">{digit}</span>
        </Digit>
      ))}
    </RollingNumberContainer>
  );
};
