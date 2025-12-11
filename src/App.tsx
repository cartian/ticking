import React from "react";
import { useRollingNumberDemo } from "./hooks/useRollingNumberDemo";
import { RollingNumberRenderer } from "./components/Demo/RollingNumberRenderer";
import { ControlsPanel } from "./components/Demo/ControlsPanel";
import { FormatSelector } from "./components/Demo/FormatSelector";
import {
  AppContainer,
  Container,
  HeroSection,
  Title,
  Subtitle,
  InputSection,
  Label,
  Input,
  RollingNumberDisplay,
  RetriggerButton,
} from "./components/Demo/styled";

export const App = () => {
  const {
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
  } = useRollingNumberDemo();

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

          <ControlsPanel
            duration={duration}
            lineHeight={lineHeight}
            onDurationChange={handleDurationChange}
            onLineHeightChange={handleLineHeightChange}
          >
            <FormatSelector
              selectedFormat={format}
              onFormatChange={handleFormatChange}
            />
          </ControlsPanel>

          <RollingNumberDisplay>
            <RollingNumberRenderer
              targetNumber={targetNumber}
              duration={duration}
              lineHeight={lineHeight}
              format={format}
              animationKey={animationKey}
              getDecimalPlaces={getDecimalPlaces}
            />
          </RollingNumberDisplay>

          <RetriggerButton onClick={retriggerAnimation}>
            ↻ Retrigger Animation
          </RetriggerButton>
        </HeroSection>
      </Container>
    </AppContainer>
  );
};
