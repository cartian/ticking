import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FormattedContainer = styled.span`
  display: inline-flex;
  font-variant-numeric: tabular-nums;
`;

const StaticChar = styled.span`
  display: inline-block;
  width: 1ch;
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

interface FormattedRollingNumberProps {
  from?: number;
  to: number;
  duration?: number;
  format: 'currency' | 'percentage';
  decimalPlaces?: number;
  className?: string;
  style?: React.CSSProperties;
}

type FormattedPart = {
  type: 'digit' | 'static';
  value: string;
  digitIndex?: number; // Track which digit this is in the number
};

function getDigitStructure(targetNum: number, format: 'currency' | 'percentage', decimalPlaces: number): FormattedPart[] {
  // Create the structure based on target number (determines comma positions)
  const parts: FormattedPart[] = [];
  const absTarget = Math.abs(targetNum);
  const [integerStr] = absTarget.toFixed(decimalPlaces).split('.');
  const integerLength = integerStr.length;

  if (format === 'currency') {
    parts.push({ type: 'static', value: '$' });
  }

  // Count digits from right to left to place commas correctly
  let digitIndex = integerLength - 1;
  for (let i = 0; i < integerLength; i++) {
    parts.push({ type: 'digit', value: '0', digitIndex });
    digitIndex--;

    // Add comma every 3 digits from the right (but not at the start)
    const positionFromRight = integerLength - i - 1;
    if (positionFromRight > 0 && positionFromRight % 3 === 0) {
      parts.push({ type: 'static', value: ',' });
    }
  }

  // Add decimal point and decimal digits
  if (decimalPlaces > 0) {
    parts.push({ type: 'static', value: '.' });
    for (let i = 0; i < decimalPlaces; i++) {
      parts.push({ type: 'digit', value: '0', digitIndex: -(i + 1) });
    }
  }

  if (format === 'percentage') {
    parts.push({ type: 'static', value: '%' });
  }

  return parts;
}

function getDigitsFromNumber(num: number, decimalPlaces: number): Map<number, string> {
  // Map digit index to digit value
  const digitMap = new Map<number, string>();
  const [integerStr, decimalStr = ''] = Math.abs(num).toFixed(decimalPlaces).split('.');

  // Integer part (positive indices, counting from right)
  const integerDigits = integerStr.split('').reverse();
  integerDigits.forEach((digit, index) => {
    digitMap.set(index, digit);
  });

  // Decimal part (negative indices)
  const decimalDigits = decimalStr.split('');
  decimalDigits.forEach((digit, index) => {
    digitMap.set(-(index + 1), digit);
  });

  return digitMap;
}

export const FormattedRollingNumber: React.FC<FormattedRollingNumberProps> = ({
  from = 0,
  to,
  duration = 1000,
  format,
  decimalPlaces = 2,
  className,
  style,
}) => {
  const [currentValue, setCurrentValue] = useState(from);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    setCurrentValue(to);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [to]);

  // Get structure based on target number
  const structure = getDigitStructure(to, format, decimalPlaces);

  // Get actual digits from current value
  const currentDigits = getDigitsFromNumber(currentValue, decimalPlaces);

  return (
    <FormattedContainer
      className={className}
      style={{
        ...style,
        '--roll-duration': `${duration}ms`,
      } as React.CSSProperties}
    >
      {structure.map((part, index) => {
        if (part.type === 'static') {
          return <StaticChar key={`static-${index}`}>{part.value}</StaticChar>;
        } else {
          // Get the actual digit value for this position
          const digitValue = currentDigits.get(part.digitIndex!) || '0';
          return (
            <Digit key={`digit-${part.digitIndex}`} value={digitValue}>
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
              <span className="value">{digitValue}</span>
            </Digit>
          );
        }
      })}
    </FormattedContainer>
  );
};
