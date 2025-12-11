import React from "react";
import { RollingNumber } from "../RollingNumber";
import { FormattedRollingNumber } from "../FormattedRollingNumber";
import { FormatType } from "../../constants";

interface RollingNumberRendererProps {
  targetNumber: number;
  duration: number;
  lineHeight: number;
  format: FormatType;
  animationKey: number;
  getDecimalPlaces: (num: number) => number;
}

export const RollingNumberRenderer: React.FC<RollingNumberRendererProps> = ({
  targetNumber,
  duration,
  lineHeight,
  format,
  animationKey,
  getDecimalPlaces,
}) => {
  const displayNum = targetNumber || 0;
  const decimalPlaces = getDecimalPlaces(displayNum);

  switch (format) {
    case "none":
      return (
        <RollingNumber
          key={`none-${animationKey}`}
          from={0}
          to={Math.round(displayNum)}
          duration={duration}
          lineHeight={lineHeight}
        />
      );

    case "numerical":
      return (
        <FormattedRollingNumber
          key={`numerical-${animationKey}`}
          from={0}
          to={Math.round(displayNum)}
          duration={duration}
          lineHeight={lineHeight}
          format="numerical"
          decimalPlaces={0}
        />
      );

    case "numerical-decimals":
      return (
        <FormattedRollingNumber
          key={`numerical-decimals-${animationKey}`}
          from={0}
          to={displayNum}
          duration={duration}
          lineHeight={lineHeight}
          format="numerical"
          decimalPlaces={decimalPlaces}
        />
      );

    case "percentage":
      return (
        <FormattedRollingNumber
          key={`percentage-${animationKey}`}
          from={0}
          to={Math.round(displayNum)}
          duration={duration}
          lineHeight={lineHeight}
          format="percentage"
          decimalPlaces={0}
        />
      );

    case "percentage-decimals":
      return (
        <FormattedRollingNumber
          key={`percentage-decimals-${animationKey}`}
          from={0}
          to={displayNum}
          duration={duration}
          lineHeight={lineHeight}
          format="percentage"
          decimalPlaces={decimalPlaces}
        />
      );

    case "currency":
      return (
        <FormattedRollingNumber
          key={`currency-${animationKey}`}
          from={0}
          to={displayNum}
          duration={duration}
          lineHeight={lineHeight}
          format="currency"
          decimalPlaces={Math.max(2, decimalPlaces)}
        />
      );

    default:
      return null;
  }
};
