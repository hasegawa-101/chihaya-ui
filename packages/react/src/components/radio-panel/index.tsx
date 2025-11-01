import type React from "react";
import { type ComponentProps, useMemo, useRef } from "react";

import { tv } from "tailwind-variants";
import { Component } from "../component";
import { RadioButton } from "../radio-button";

const radioPanelStyle = tv({
  base: [
    "w-full cursor-pointer rounded-md border border-gray-300 bg-white p-4",
    "has-[:focus-visible]:focus-ring-primary [&:has(:focus-visible)]:focus-ring-primary",
    "[&_.radioInput:focus-visible_+_span]:shadow-none",
  ],
});

type Props = ComponentProps<typeof RadioButton> & {
  as?: React.ElementType;
};

export const RadioPanel: React.FC<Props> = ({ as, className, ...props }) => {
  const styles = useMemo(() => radioPanelStyle({ className }), [className]);

  const innerRef = useRef<HTMLInputElement>(null);
  const handleOuterClick = () => {
    innerRef.current?.click();
  };

  return (
    <Component onClick={handleOuterClick} as={as} className={styles}>
      <RadioButton {...props} ref={innerRef} />
    </Component>
  );
};
