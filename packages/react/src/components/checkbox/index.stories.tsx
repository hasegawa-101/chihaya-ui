import type { StoryFn } from "@storybook/react";
import { Checkbox } from "./index.tsx";

export default {
  component: Checkbox,
};

export const Base: StoryFn = () => {
  const checkBoxDemoData = [
    { value: "1", label: "チェックボックス 1" },
    { value: "2", label: "チェックボックス 2" },
    { value: "3", label: "チェックボックス 3" },
  ];

  return (
    <>
      {checkBoxDemoData.map((data) => (
        <Checkbox key={data.value} name={"base"} value={data.value}>
          {data.label}
        </Checkbox>
      ))}
    </>
  );
};
