# @chihaya-ui/react

A modern React component library built with Tailwind CSS v4.

## Features

- 🎨 Styled with Tailwind CSS (prefix: `chu-`)
- ⚡️ Built with Vite and TypeScript
- 🔒 No style conflicts with your project
- 📦 Tree-shakable ESM bundle
- 🎯 Fully typed with TypeScript

## Installation

```bash
npm install @chihaya-ui/react
# or
yarn add @chihaya-ui/react
# or
pnpm add @chihaya-ui/react
# or
bun add @chihaya-ui/react
```

## Usage

Import the CSS file once in your app entry point:

```tsx
import '@chihaya-ui/react/styles.css';
```

Then use the components:

```tsx
import { BaseButton, PrimaryButton } from '@chihaya-ui/react';

function App() {
  return (
    <div>
      <BaseButton>Click me</BaseButton>
      <PrimaryButton>Primary Action</PrimaryButton>
    </div>
  );
}
```

## Components

### BaseButton

A basic button component with neutral styling.

```tsx
<BaseButton onClick={() => console.log('clicked')}>
  Base Button
</BaseButton>
```

### PrimaryButton

A primary action button with blue styling.

```tsx
<PrimaryButton onClick={() => console.log('clicked')}>
  Primary Button
</PrimaryButton>
```

## Styling

All Tailwind classes are prefixed with `chu-` to avoid conflicts with your project's styles. You can customize components by passing your own className:

```tsx
<BaseButton className="chu-w-full">
  Full Width Button
</BaseButton>
```

## Development

```bash
# Install dependencies
bun install

# Build the package
bun run build

# Run Storybook
bun run storybook
```

## License

MIT
