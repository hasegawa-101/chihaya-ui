import type { Meta, StoryObj } from "@storybook/react";
import { ChihayaUIProvider } from "../../provider";
import { BaseButton } from "./index.tsx";

const meta = {
  component: BaseButton,
} satisfies Meta<typeof BaseButton>;

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
