import React from "react";
import {
  ControlsSection,
  ControlGroup,
  ControlLabel,
  Slider,
  SliderValue,
} from "./styled";
import { SLIDER_RANGES } from "../../constants";

interface ControlsPanelProps {
  duration: number;
  lineHeight: number;
  onDurationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLineHeightChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  duration,
  lineHeight,
  onDurationChange,
  onLineHeightChange,
  children,
}) => {
  return (
    <ControlsSection>
      <ControlGroup>
        <ControlLabel htmlFor="duration-slider">
          Animation Speed: {duration}ms
        </ControlLabel>
        <Slider
          id="duration-slider"
          type="range"
          min={SLIDER_RANGES.DURATION.MIN}
          max={SLIDER_RANGES.DURATION.MAX}
          step={SLIDER_RANGES.DURATION.STEP}
          value={duration}
          onChange={onDurationChange}
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
          min={SLIDER_RANGES.LINE_HEIGHT.MIN}
          max={SLIDER_RANGES.LINE_HEIGHT.MAX}
          step={SLIDER_RANGES.LINE_HEIGHT.STEP}
          value={lineHeight}
          onChange={onLineHeightChange}
        />
        <SliderValue>{lineHeight.toFixed(2)}</SliderValue>
      </ControlGroup>

      {children}
    </ControlsSection>
  );
};
