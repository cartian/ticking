import React, { useState } from 'react';
import styled from 'styled-components';
import { RollingNumber } from './components/RollingNumber';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 1rem 0;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin: 0 0 2rem 0;
`;

const InputSection = styled.div`
  margin: 2rem 0 1rem 0;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
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
    border-color: #667eea;
  }
`;

const RollingNumberDisplay = styled.div`
  font-size: 6rem;
  font-weight: bold;
  color: #667eea;
  margin: 2rem 0;
  font-variant-numeric: tabular-nums;
`;

const SampleSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  color: #333;
`;

const SampleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const SampleLabel = styled.div`
  flex: 1;
`;

const SampleTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.25rem;
`;

const SampleDescription = styled.div`
  font-size: 1rem;
  color: #999;
`;

const SampleValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #667eea;
  font-variant-numeric: tabular-nums;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
`;

const GridItem = styled.div``;

const CenteredSection = styled(SampleSection)`
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 2rem 0;
`;

const SmallGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const MetricBox = styled.div``;

const MetricLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #667eea;
  font-variant-numeric: tabular-nums;
`;

const LargeMetricValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;
`;

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [targetNumber, setTargetNumber] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const num = parseInt(value) || 0;
    setTargetNumber(num);
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
              <SampleTitle>Revenue Counter</SampleTitle>
              <SampleDescription>Annual recurring revenue</SampleDescription>
            </SampleLabel>
            <SampleValue>
              $<RollingNumber from={0} to={2847392} duration={2000} />
            </SampleValue>
          </SampleRow>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>User Count</SampleTitle>
              <SampleDescription>Active users this month</SampleDescription>
            </SampleLabel>
            <SampleValue>
              <RollingNumber from={0} to={15847} duration={1500} />
            </SampleValue>
          </SampleRow>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>Growth Rate</SampleTitle>
              <SampleDescription>Year over year percentage</SampleDescription>
            </SampleLabel>
            <SampleValue>
              <RollingNumber from={0} to={247} duration={1200} />%
            </SampleValue>
          </SampleRow>

          <SampleRow>
            <SampleLabel>
              <SampleTitle>Transactions</SampleTitle>
              <SampleDescription>Processed today</SampleDescription>
            </SampleLabel>
            <SampleValue>
              <RollingNumber from={0} to={8932} duration={1800} />
            </SampleValue>
          </SampleRow>
        </SampleSection>

        <Grid>
          <GridItem>
            <SampleSection>
              <SectionTitle>Small Numbers</SectionTitle>
              <SectionText>Perfect for counters and metrics</SectionText>
              <LargeMetricValue style={{ color: '#667eea' }}>
                <RollingNumber from={0} to={42} duration={1000} />
              </LargeMetricValue>
            </SampleSection>
          </GridItem>

          <GridItem>
            <SampleSection>
              <SectionTitle>Large Numbers</SectionTitle>
              <SectionText>Great for financial dashboards</SectionText>
              <LargeMetricValue style={{ color: '#764ba2' }}>
                <RollingNumber from={0} to={9876543} duration={2500} />
              </LargeMetricValue>
            </SampleSection>
          </GridItem>
        </Grid>

        <CenteredSection>
          <SectionTitle>Different Durations</SectionTitle>
          <SectionText>
            Customize animation speed for different use cases
          </SectionText>

          <SmallGrid>
            <MetricBox>
              <MetricLabel>Fast (500ms)</MetricLabel>
              <MetricValue>
                <RollingNumber from={0} to={targetNumber || 1234} duration={500} />
              </MetricValue>
            </MetricBox>

            <MetricBox>
              <MetricLabel>Medium (1500ms)</MetricLabel>
              <MetricValue>
                <RollingNumber from={0} to={targetNumber || 1234} duration={1500} />
              </MetricValue>
            </MetricBox>

            <MetricBox>
              <MetricLabel>Slow (3000ms)</MetricLabel>
              <MetricValue>
                <RollingNumber from={0} to={targetNumber || 1234} duration={3000} />
              </MetricValue>
            </MetricBox>
          </SmallGrid>
        </CenteredSection>
      </Container>
    </AppContainer>
  );
};
