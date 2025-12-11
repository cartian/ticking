import { useState } from "react";
import { FormatType, DEFAULT_VALUES } from "../constants";

export const useRollingNumberDemo = () => {
  const [inputValue, setInputValue] = useState(DEFAULT_VALUES.NUMBER);
  const [targetNumber, setTargetNumber] = useState(
    parseFloat(DEFAULT_VALUES.NUMBER)
  );
  const [duration, setDuration] = useState(DEFAULT_VALUES.DURATION);
  const [lineHeight, setLineHeight] = useState(DEFAULT_VALUES.LINE_HEIGHT);
  const [format, setFormat] = useState<FormatType>(DEFAULT_VALUES.FORMAT);
  const [animationKey, setAnimationKey] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const num = parseFloat(value) || 0;
    setTargetNumber(num);
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value));
  };

  const handleLineHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLineHeight(parseFloat(e.target.value));
  };

  const handleFormatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormat(e.target.value as FormatType);
  };

  const retriggerAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const getDecimalPlaces = (num: number): number => {
    const numStr = num.toString();
    if (numStr.includes(".")) {
      return numStr.split(".")[1].length;
    }
    return 0;
  };

  return {
    inputValue,
    targetNumber,
    duration,
    lineHeight,
    format,
    animationKey,
    handleInputChange,
    handleDurationChange,
    handleLineHeightChange,
    handleFormatChange,
    retriggerAnimation,
    getDecimalPlaces,
  };
};
