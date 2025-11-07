# Ticking Numbers Demo

An interactive demo showcasing animated number counters with smooth fast-to-slow easing effects.

## Live Demo

**[View Demo on GitHub Pages](https://cartian.github.io/ticking/)**

## Features

- **Fast-to-Slow Animation**: Numbers start ticking rapidly and gradually decelerate as they approach their target value
- **Quartic Ease-Out**: Smooth, pronounced slowdown using a quartic easing function
- **Multiple Examples**: Financial numbers, percentages, interest rates, and various interval sizes
- **Customizable**: Configurable duration, decimal places, and number ranges
- **Auto-Reset**: Animations automatically reset after completion for continuous demonstration

## Technology Stack

- React 18
- TypeScript
- Vite
- Styled Components
- requestAnimationFrame for smooth 60fps animations

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Usage

The `TickingNumber` component accepts the following props:

- `from`: Initial value (default: 0)
- `to`: Target value (required)
- `duration`: Animation duration in milliseconds (default: 2000)
- `decimals`: Number of decimal places (default: 2)
- `isPercentage`: Display as percentage (default: false)
- `resetDelay`: Seconds before auto-reset (default: 3)

## How It Works

The animation uses a custom React hook (`useTickingNumber`) that leverages `requestAnimationFrame` for smooth animations. The quartic ease-out function (`1 - Math.pow(1 - t, 4)`) creates the characteristic fast-to-slow ticking effect by applying non-linear timing to the animation progress.
