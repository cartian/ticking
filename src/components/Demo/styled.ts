import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
  font-family: "Inter", sans-serif;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const HeroSection = styled.div`
  text-align: center;
  padding: 3.5rem 2rem 4rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  margin-bottom: 2.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.75rem 0;
  color: #1a1a1a;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
`;

export const InputSection = styled.div`
  margin: 0 0 1.5rem 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Input = styled.input`
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

export const RollingNumberDisplay = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: #1a1a1a;
  margin: 1.5rem 0 0 0;
  font-variant-numeric: tabular-nums;
`;

export const ControlsSection = styled.div`
  display: flex;
  gap: 3rem;
  margin: 2rem 0;
  padding: 0 2rem;
  justify-content: center;
  align-items: flex-start;
`;

export const ControlGroup = styled.div`
  flex: 1;
  max-width: 350px;
`;

export const ControlLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Slider = styled.input`
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

export const SliderValue = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #1a1a1a;
  font-weight: 600;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const RadioLabel = styled.label`
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

export const RetriggerButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  color: #1a1a1a;
  transition: all 0.2s;

  &:hover {
    border-color: #fc6544;
    color: #fc6544;
  }

  &:active {
    transform: scale(0.98);
  }
`;
