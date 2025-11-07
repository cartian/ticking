import styled from 'styled-components';
import { TickingNumber } from './components/TickingNumber';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Inter', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ExampleSection = styled.div``;

const ExampleTitle = styled.h3`
  text-align: center;
  font-family: 'Inter', sans-serif;
`;

function App() {
  return (
    <Container>
      <Title>Ticking Numbers Demo</Title>
      <Subtitle>
        Click the "Animate" button below each number to watch it tick from initial to final value
      </Subtitle>

      <Grid>
        <ExampleSection>
          <ExampleTitle>Financial Number</ExampleTitle>
          <TickingNumber
            from={0}
            to={234567.89}
            duration={2000}
            decimals={2}
          />
        </ExampleSection>

        <ExampleSection>
          <ExampleTitle>Percentage (4 decimals)</ExampleTitle>
          <TickingNumber
            from={0}
            to={12.5678}
            duration={2000}
            decimals={4}
            isPercentage={true}
          />
        </ExampleSection>

        <ExampleSection>
          <ExampleTitle>Large Number</ExampleTitle>
          <TickingNumber
            from={50000}
            to={987654.32}
            duration={2000}
            decimals={2}
          />
        </ExampleSection>

        <ExampleSection>
          <ExampleTitle>Slow Animation (4s)</ExampleTitle>
          <TickingNumber
            from={0}
            to={75000}
            duration={4000}
            decimals={0}
          />
        </ExampleSection>

        <ExampleSection>
          <ExampleTitle>Interest Rate</ExampleTitle>
          <TickingNumber
            from={0}
            to={5.2500}
            duration={2000}
            decimals={4}
            isPercentage={true}
          />
        </ExampleSection>

        <ExampleSection>
          <ExampleTitle>Small Interval (49K to 50K)</ExampleTitle>
          <TickingNumber
            from={49000}
            to={50000}
            duration={2000}
            decimals={0}
          />
        </ExampleSection>
      </Grid>
    </Container>
  );
}

export default App;
