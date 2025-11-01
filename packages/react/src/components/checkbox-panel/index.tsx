import type React from "react";
import { type ComponentProps, useMemo, useRef } from "react";
import { tv } from "tailwind-variants";
import { Checkbox } from "../checkbox";
import { Component } from "../component";

const checkBoxPanelStyle = tv({
  base: [
    "w-full cursor-pointer rounded-md border border-gray-300 bg-white p-4",
    // "has-[:focus-visible]:focus-ring-primary [&:has(:focus-visible)]:focus-ring-primary",
    // "[&_.checkBoxInput:focus-visible_+_span]:shadow-none",
  ],
});

type Props = ComponentProps<typeof Checkbox> & {
  as?: React.ElementType;
};
export const CheckBoxPanel: React.FC<Props> = ({ as, className, ...props }) => {
  const styles = useMemo(() => checkBoxPanelStyle({ className }), [className]);

  const innerRef = useRef<HTMLInputElement>(null);
  const handleOuterClick = () => {
    innerRef.current?.click();
  };

  return (
    <Component onClick={handleOuterClick} as={as} className={styles}>
      <Checkbox {...props} ref={innerRef} />
    </Component>
  );
};
