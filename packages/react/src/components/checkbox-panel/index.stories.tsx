import { StoryFn } from "@storybook/react";
import { ChangeEvent, useState } from "react";
import { Stack } from "../../Layouts";
import { CheckBoxPanel } from "./index.tsx";

export default {
  component: CheckBoxPanel,
};

export const Base: StoryFn = () => {
  const checkBoxDemoData = [
    {
      value: "1",
      label:
        "チェックボックスチェックボックスチェックボックスチェックボックス 1",
    },
    { value: "2", label: "チェックボックスチェックボックスチェックボックス 2" },
    { value: "3", label: "チェックボックスチェックボックス 3" },
  ];

  const [value, setValue] = useState<string[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentName = e.currentTarget.name;

    if (value.includes(currentName)) {
      setValue(value.filter((name) => name !== currentName));
    } else {
      setValue([...value, currentName]);
    }
  };

  return (
    <>
      <Stack gap={4}>
        {checkBoxDemoData.map((data) => (
          <CheckBoxPanel
            key={data.value}
            name={data.value}
            checked={value.includes(data.value)}
            onChange={handleChange}
          >
            {data.label}
          </CheckBoxPanel>
        ))}
      </Stack>
    </>
  );
};
