import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const RollingNumberContainer = styled.span`
  display: inline-flex;
  font-variant-numeric: tabular-nums;
`;

const Digit = styled.span<{ value: string }>`
  width: 1ch;
  height: 1em;
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

  .scale span {
    line-height: var(--line-height, 1.4);
    display: block;
    flex-shrink: 0;
  }

  .scale span:last-child {
    /* the minus (-) */
    position: absolute;
    bottom: calc(-0.5 * var(--line-height, 1.4) * 1em);
    left: 0;
  }

  ${props => {
    const valueMap: { [key: string]: number } = {
      '\u200B': 0.5,
      '0': 0,
      '1': -1,
      '2': -2,
      '3': -3,
      '4': -4,
      '5': -5,
      '6': -6,
      '7': -7,
      '8': -8,
      '9': -9,
      '-': -10,
    };
    const offset = valueMap[props.value] ?? 0;
    return `
      .scale {
        transform: translateY(calc((${offset} * var(--line-height, 1.4) - 0.5 * (var(--line-height, 1.4) - 1)) * 1em));
      }
    `;
  }}
`;

interface RollingNumberProps {
  from?: number;
  to: number;
  duration?: number;
  lineHeight?: number;
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
  lineHeight = 1.4,
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
        '--line-height': lineHeight,
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
