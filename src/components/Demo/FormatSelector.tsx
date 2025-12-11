import React from "react";
import { ControlGroup, ControlLabel, RadioGroup, RadioLabel } from "./styled";
import { FORMAT_OPTIONS, FormatType } from "../../constants";

interface FormatSelectorProps {
  selectedFormat: FormatType;
  onFormatChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormatSelector: React.FC<FormatSelectorProps> = ({
  selectedFormat,
  onFormatChange,
}) => {
  return (
    <ControlGroup>
      <ControlLabel>Format Type</ControlLabel>
      <RadioGroup>
        {FORMAT_OPTIONS.map((option) => (
          <RadioLabel key={option.value}>
            <input
              type="radio"
              name="format"
              value={option.value}
              checked={selectedFormat === option.value}
              onChange={onFormatChange}
            />
            {option.label}
          </RadioLabel>
        ))}
      </RadioGroup>
    </ControlGroup>
  );
};
