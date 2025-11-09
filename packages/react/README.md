# @chihaya-ui/react

A modern React component library built with Tailwind CSS v4.

## Features

- 🎨 Styled with Tailwind CSS v4 (no prefix required)
- ⚡️ Built with tsup and TypeScript
- 🔒 No separate CSS bundle - styles generated through your Tailwind build
- 📦 Tree-shakable ESM and CJS bundles
- 🎯 Fully typed with TypeScript
- 🎭 Support for React Server Components

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

## Setup

### 1. Install Tailwind CSS v4

```bash
npm install -D tailwindcss@4 @tailwindcss/postcss postcss
```

### 2. Configure PostCSS

Create `postcss.config.mjs`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### 3. Configure Tailwind CSS

Create or update your global CSS file (e.g., `app/globals.css`):

```css
@import "tailwindcss";
@source "../../node_modules/@chihaya-ui/react/dist/**/*.{js,ts,jsx,tsx}";
```

The `@source` directive tells Tailwind to scan Chihaya UI components for class names.

### 4. Wrap your app with ChihayaUIProvider

```tsx
import { ChihayaUIProvider } from "@chihaya-ui/react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChihayaUIProvider>{children}</ChihayaUIProvider>
      </body>
    </html>
  );
}
```

## Usage

```tsx
import { BaseButton, PrimaryButton, Stack } from "@chihaya-ui/react";

function App() {
  return (
    <Stack gap={4}>
      <BaseButton>Click me</BaseButton>
      <PrimaryButton>Primary Action</PrimaryButton>
    </Stack>
  );
}
```

## Components

### Buttons

#### BaseButton

A basic button component with neutral styling.

```tsx
<BaseButton onClick={() => console.log("clicked")}>Base Button</BaseButton>
```

#### PrimaryButton

A primary action button with blue styling.

```tsx
<PrimaryButton onClick={() => console.log("clicked")}>
  Primary Button
</PrimaryButton>
```

### Layout

#### Stack

A flexible layout component for vertical stacking with configurable gap and alignment.

```tsx
<Stack gap={4} alignItems="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

Props:
- `gap`: `1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 16` - Space between items (default: `4`)
- `alignItems`: `"start" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch"` - Alignment (default: `"flex-start"`)
- `inline`: `boolean` - Use `inline-flex` instead of `flex` (default: `false`)
- `as`: `ElementType` - Custom element type (default: `"div"`)

### Form Components

#### Checkbox

```tsx
import { Checkbox } from "@chihaya-ui/react";

<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)}>
  Accept terms
</Checkbox>;
```

#### CheckBoxPanel

A checkbox wrapped in a clickable panel.

```tsx
<CheckBoxPanel checked={checked} onChange={(e) => setChecked(e.target.checked)}>
  <div>
    <h3>Option 1</h3>
    <p>Description of option 1</p>
  </div>
</CheckBoxPanel>
```

#### RadioButton

```tsx
<RadioButton name="option" value="1" checked={value === "1"} onChange={(e) => setValue(e.target.value)}>
  Option 1
</RadioButton>
```

#### RadioPanel

A radio button wrapped in a clickable panel.

```tsx
<RadioPanel name="option" value="1" checked={value === "1"} onChange={(e) => setValue(e.target.value)}>
  <div>
    <h3>Option 1</h3>
    <p>Description of option 1</p>
  </div>
</RadioPanel>
```

### Dialog

#### BaseDialog

```tsx
const dialogRef = useRef<HTMLDialogElement>(null);

<BaseDialog ref={dialogRef}>
  <p>Dialog content</p>
  <button onClick={() => dialogRef.current?.close()}>Close</button>
</BaseDialog>;
```

### Utilities

#### ChihayaUIProvider

The provider component that sets up the necessary context. **Required** at the root of your app.

```tsx
<ChihayaUIProvider>{children}</ChihayaUIProvider>
```

#### Component

A polymorphic component wrapper that allows you to change the underlying element.

```tsx
<Component as="section" className="custom-class">
  Content
</Component>
```

## Styling

All components use standard Tailwind CSS classes (no prefix). You can customize components by passing your own className:

```tsx
<BaseButton className="w-full">Full Width Button</BaseButton>
```

## Migration from Previous Version

If you're upgrading from a version that used `@chihaya-ui/react/styles.css`:

1. **Remove the CSS import**: Delete `import '@chihaya-ui/react/styles.css'` from your code
2. **Install Tailwind CSS v4**: Follow the setup instructions above
3. **Update your Tailwind config**: Add the `@source` directive to scan Chihaya UI components
4. **No prefix required**: CSS classes no longer have the `chu-` prefix

## Development

```bash
# Install dependencies
bun install

# Build the package
bun run build

# Run type checking
bun run typecheck

# Run linter
bun run lint

# Format code
bun run format
```

## License

MIT
