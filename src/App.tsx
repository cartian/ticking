import React, { useState } from "react";
import styled from "styled-components";
import { RollingNumber } from "./components/RollingNumber";

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
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
    border-left-color: #FC6544;
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
  font-family: 'Inter', sans-serif;
  box-shadow: 0 0 0 0 rgba(252, 101, 68, 0);

  &:hover {
    color: #1a1a1a;
    border-color: #e0e0e0;
    background: #f8f9fa;
    box-shadow: 0 0 12px 3px rgba(252, 101, 68, 0.12), 0 2px 8px 0 rgba(252, 101, 68, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 8px 2px rgba(252, 101, 68, 0.18);
  }
`;

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [targetNumber, setTargetNumber] = useState(0);
  const [animationKeys, setAnimationKeys] = useState({
    revenue: 0,
    users: 0,
    growth: 0,
    transactions: 0,
    small: 0,
    large: 0,
    fast: 0,
    medium: 0,
    slow: 0,
    all: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const num = parseInt(value) || 0;
    setTargetNumber(num);
  };

  const retriggerAnimation = (key: keyof typeof animationKeys) => {
    setAnimationKeys((prev) => ({ ...prev, [key]: prev[key] + 1 }));
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
              placeholder="Try 123456"
            />
          </InputSection>

          <RollingNumberDisplay>
            <RollingNumber from={0} to={targetNumber} duration={1000} />
          </RollingNumberDisplay>
        </HeroSection>

        <SampleSection>
          <SectionTitle>Sample Use Cases</SectionTitle>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>
                Revenue Counter
                <SmallButton onClick={() => retriggerAnimation("revenue")}>↻</SmallButton>
              </SampleTitle>
              <SampleDescription>Annual recurring revenue</SampleDescription>
            </SampleLabel>
            <SampleValue>
              $<RollingNumber key={`revenue-${animationKeys.revenue}`} from={0} to={2847392} duration={2000} />
            </SampleValue>
          </SampleRow>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>
                User Count
                <SmallButton onClick={() => retriggerAnimation("users")}>↻</SmallButton>
              </SampleTitle>
              <SampleDescription>Active users this month</SampleDescription>
            </SampleLabel>
            <SampleValue>
              <RollingNumber key={`users-${animationKeys.users}`} from={0} to={15847} duration={1500} />
            </SampleValue>
          </SampleRow>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>
                Growth Rate
                <SmallButton onClick={() => retriggerAnimation("growth")}>↻</SmallButton>
              </SampleTitle>
              <SampleDescription>Year over year percentage</SampleDescription>
            </SampleLabel>
            <SampleValue>
              <RollingNumber key={`growth-${animationKeys.growth}`} from={0} to={247} duration={1200} />%
            </SampleValue>
          </SampleRow>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>
                Transactions
                <SmallButton onClick={() => retriggerAnimation("transactions")}>↻</SmallButton>
              </SampleTitle>
              <SampleDescription>Processed today</SampleDescription>
            </SampleLabel>
            <SampleValue>
              <RollingNumber key={`transactions-${animationKeys.transactions}`} from={0} to={8932} duration={1800} />
            </SampleValue>
          </SampleRow>
        </SampleSection>

        <Grid>
          <GridItem>
            <SampleSection style={{ textAlign: "center" }}>
              <SectionTitle style={{ textAlign: "center", marginBottom: "0.5rem" }}>Small Numbers</SectionTitle>
              <SectionText style={{ marginBottom: "1rem" }}>Perfect for counters and metrics</SectionText>
              <div style={{ marginBottom: "1.5rem" }}>
                <SmallButton onClick={() => retriggerAnimation("small")}>↻ Retrigger</SmallButton>
              </div>
              <LargeMetricValue style={{ color: "#1a1a1a" }}>
                <RollingNumber key={`small-${animationKeys.small}`} from={0} to={42} duration={1000} />
              </LargeMetricValue>
            </SampleSection>
          </GridItem>

          <GridItem>
            <SampleSection style={{ textAlign: "center" }}>
              <SectionTitle style={{ textAlign: "center", marginBottom: "0.5rem" }}>Large Numbers</SectionTitle>
              <SectionText style={{ marginBottom: "1rem" }}>Great for financial dashboards</SectionText>
              <div style={{ marginBottom: "1.5rem" }}>
                <SmallButton onClick={() => retriggerAnimation("large")}>↻ Retrigger</SmallButton>
              </div>
              <LargeMetricValue style={{ color: "#1a1a1a" }}>
                <RollingNumber key={`large-${animationKeys.large}`} from={0} to={9876543} duration={2500} />
              </LargeMetricValue>
            </SampleSection>
          </GridItem>
        </Grid>

        <CenteredSection>
          <SectionTitle style={{ marginBottom: "0.5rem" }}>Different Durations</SectionTitle>
          <SectionText>
            Customize animation speed for different use cases
          </SectionText>

          <SmallGrid>
            <MetricBox>
              <MetricLabel>Fast (500ms)</MetricLabel>
              <div style={{ marginBottom: "0.5rem" }}>
                <SmallButton onClick={() => retriggerAnimation("fast")}>↻ Retrigger</SmallButton>
              </div>
              <MetricValue>
                <RollingNumber
                  key={`fast-${animationKeys.fast}`}
                  from={0}
                  to={targetNumber || 1234}
                  duration={500}
                />
              </MetricValue>
            </MetricBox>

            <MetricBox>
              <MetricLabel>Medium (1500ms)</MetricLabel>
              <div style={{ marginBottom: "0.5rem" }}>
                <SmallButton onClick={() => retriggerAnimation("medium")}>↻ Retrigger</SmallButton>
              </div>
              <MetricValue>
                <RollingNumber
                  key={`medium-${animationKeys.medium}`}
                  from={0}
                  to={targetNumber || 1234}
                  duration={1500}
                />
              </MetricValue>
            </MetricBox>

            <MetricBox>
              <MetricLabel>Slow (3000ms)</MetricLabel>
              <div style={{ marginBottom: "0.5rem" }}>
                <SmallButton onClick={() => retriggerAnimation("slow")}>↻ Retrigger</SmallButton>
              </div>
              <MetricValue>
                <RollingNumber
                  key={`slow-${animationKeys.slow}`}
                  from={0}
                  to={targetNumber || 1234}
                  duration={3000}
                />
              </MetricValue>
            </MetricBox>
          </SmallGrid>
        </CenteredSection>
      </Container>
    </AppContainer>
  );
};
