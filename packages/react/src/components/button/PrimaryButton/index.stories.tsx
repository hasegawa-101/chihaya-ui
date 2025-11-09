import type { Meta, StoryObj } from "@storybook/react";
import { ChihayaUIProvider } from "../../provider";
import { PrimaryButton } from "./index.tsx";

const meta = {
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "ボタン",
  },
};

export const WithoutAnimation: Story = {
  args: {
    children: "アニメーションなし",
  },
  decorators: [
    (Story) => (
      <ChihayaUIProvider config={{ disableAnimation: true }}>
        <Story />
      </ChihayaUIProvider>
    ),
  ],
};
