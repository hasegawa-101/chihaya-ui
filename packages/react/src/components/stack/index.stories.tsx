import type { Meta } from "@storybook/react";
import { Stack } from "./index.tsx";

const meta = {
  title: "components/Layouts/Stack",
  component: Stack,
} satisfies Meta<typeof Stack>;

export default meta;

export const StackComponent = {
  args: {
    gap: 4,
    children: [
      <div
        key={1}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />,
      <div
        key={2}
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
      />,
      <div
        key={3}
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      />,
    ],
  },
};
