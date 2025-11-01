import type { StoryFn } from "@storybook/react";
import type React from "react";
import { useCallback, useState } from "react";
import { Stack } from "../stack";
import { RadioPanel } from "./index.tsx";

export default {
  component: RadioPanel,
};

export const Base: StoryFn = () => {
  const radioDemoData = [
    { value: "1", label: "Radio 1" },
    { value: "2", label: "Radio 2" },
    { value: "3", label: "Radio 3" },
  ];

  const [value, setValue] = useState<string | undefined>(undefined);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  return (
    <Stack gap={4}>
      {radioDemoData.map((data) => (
        <RadioPanel
          key={data.value}
          name={"base"}
          value={data.value}
          checked={value === data.value}
          onChange={handleChange}
        >
          {data.label}
        </RadioPanel>
      ))}
    </Stack>
  );
};
