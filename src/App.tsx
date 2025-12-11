import React, { useState } from "react";
import styled from "styled-components";
import { RollingNumber } from "./components/RollingNumber";
import { FormattedRollingNumber } from "./components/FormattedRollingNumber";

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
  font-family: "Inter", sans-serif;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 3.5rem 2rem 4rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  margin-bottom: 2.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.75rem 0;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
`;

const InputSection = styled.div`
  margin: 0 0 1.5rem 0;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  width: 300px;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin: 0 auto;
  display: block;

  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`;

const RollingNumberDisplay = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: #1a1a1a;
  margin: 1.5rem 0 0 0;
  font-variant-numeric: tabular-nums;
`;

const SampleSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin: 0 0 2rem 0;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const SampleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  border-left: 3px solid transparent;
  transition: border-left-color 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    border-left-color: #fc6544;
  }
`;

const SampleLabel = styled.div`
  flex: 1;
`;

const SampleTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SampleDescription = styled.div`
  font-size: 0.875rem;
  color: #9ca3af;
  font-weight: 500;
`;

const SampleValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  font-variant-numeric: tabular-nums;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2.5rem;
`;

const GridItem = styled.div``;

const CenteredSection = styled(SampleSection)`
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
`;

const SmallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const MetricBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MetricLabel = styled.div`
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  font-variant-numeric: tabular-nums;
`;

const LargeMetricValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;
`;

const SmallButton = styled.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: "Inter", sans-serif;
  box-shadow: 0 0 0 0 rgba(252, 101, 68, 0);

  &:hover {
    color: #1a1a1a;
    border-color: #e0e0e0;
    background: #f8f9fa;
    box-shadow: 0 0 12px 3px rgba(252, 101, 68, 0.12),
      0 2px 8px 0 rgba(252, 101, 68, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 8px 2px rgba(252, 101, 68, 0.18);
  }
`;

const ControlsSection = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem 0;
  padding: 0 2rem;
  justify-content: center;
  align-items: flex-start;
`;

const ControlGroup = styled.div`
  flex: 1;
  max-width: 350px;
`;

const ControlLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Slider = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e0e0e0;
  outline: none;
  -webkit-appearance: none;
  margin-bottom: 0.5rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fc6544;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 12px 3px rgba(252, 101, 68, 0.3);
    }
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #fc6544;
    cursor: pointer;
    border: none;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 12px 3px rgba(252, 101, 68, 0.3);
    }
  }
`;

const SliderValue = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #1a1a1a;
  font-weight: 600;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  color: #1a1a1a;
  transition: color 0.2s;

  &:hover {
    color: #fc6544;
  }

  input {
    margin-right: 0.5rem;
    cursor: pointer;
    width: 16px;
    height: 16px;
    accent-color: #fc6544;
  }
`;

const RetriggerButton = styled(SmallButton)`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`;

type FormatType =
  | "none"
  | "numerical"
  | "numerical-decimals"
  | "percentage"
  | "percentage-decimals"
  | "currency";

export const App = () => {
  const [inputValue, setInputValue] = useState("8675309");
  const [targetNumber, setTargetNumber] = useState(8675309);
  const [duration, setDuration] = useState(400);
  const [lineHeight, setLineHeight] = useState(1.4);
  const [format, setFormat] = useState<FormatType>("none");
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

  // Calculate decimal places from the input number
  const getDecimalPlaces = (num: number): number => {
    const numStr = num.toString();
    if (numStr.includes(".")) {
      return numStr.split(".")[1].length;
    }
    return 0;
  };

  const renderNumber = () => {
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

  return (
    <AppContainer>
      <Container>
        <HeroSection>
          <Title>Rolling Number Component</Title>
          <Subtitle>
            Watch numbers come to life with smooth rolling animations
          </Subtitle>

          <InputSection>
            <Label htmlFor="number-input">Enter a number to see it roll</Label>
            <Input
              id="number-input"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Try 1234567.89"
            />
          </InputSection>

          <ControlsSection>
            <ControlGroup>
              <ControlLabel htmlFor="duration-slider">
                Animation Speed: {duration}ms
              </ControlLabel>
              <Slider
                id="duration-slider"
                type="range"
                min="200"
                max="2000"
                step="50"
                value={duration}
                onChange={handleDurationChange}
              />
              <SliderValue>{duration}ms</SliderValue>
            </ControlGroup>

            <ControlGroup>
              <ControlLabel htmlFor="lineheight-slider">
                Line Height: {lineHeight.toFixed(2)}
              </ControlLabel>
              <Slider
                id="lineheight-slider"
                type="range"
                min="1.0"
                max="2.0"
                step="0.05"
                value={lineHeight}
                onChange={handleLineHeightChange}
              />
              <SliderValue>{lineHeight.toFixed(2)}</SliderValue>
            </ControlGroup>

            <ControlGroup>
              <ControlLabel>Format Type</ControlLabel>
              <RadioGroup>
                <RadioLabel>
                  <input
                    type="radio"
                    name="format"
                    value="none"
                    checked={format === "none"}
                    onChange={handleFormatChange}
                  />
                  None (Plain Number)
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="format"
                    value="numerical"
                    checked={format === "numerical"}
                    onChange={handleFormatChange}
                  />
                  Numerical (Commas)
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="format"
                    value="numerical-decimals"
                    checked={format === "numerical-decimals"}
                    onChange={handleFormatChange}
                  />
                  Numerical with Decimals
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="format"
                    value="percentage"
                    checked={format === "percentage"}
                    onChange={handleFormatChange}
                  />
                  Percentage
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="format"
                    value="percentage-decimals"
                    checked={format === "percentage-decimals"}
                    onChange={handleFormatChange}
                  />
                  Percentage with Decimals
                </RadioLabel>
                <RadioLabel>
                  <input
                    type="radio"
                    name="format"
                    value="currency"
                    checked={format === "currency"}
                    onChange={handleFormatChange}
                  />
                  Currency
                </RadioLabel>
              </RadioGroup>
            </ControlGroup>
          </ControlsSection>

          <RollingNumberDisplay>{renderNumber()}</RollingNumberDisplay>

          <RetriggerButton onClick={retriggerAnimation}>
            ↻ Retrigger Animation
          </RetriggerButton>
        </HeroSection>
      </Container>
    </AppContainer>
  );
};
