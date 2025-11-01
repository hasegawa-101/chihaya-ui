import { clsx } from "clsx";
import type { ComponentPropsWithRef, ElementType } from "react";
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const stack = tv({
  base: "flex flex-col",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex",
    },
    gap: {
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      7: "gap-7",
      8: "gap-8",
      9: "gap-9",
      10: "gap-10",
      12: "gap-12",
      16: "gap-16",
    },
    alignItems: {
      start: "items-start",
      "flex-start": "items-start",
      "flex-end": "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    inline: false,
    gap: 4,
    alignItems: "flex-start",
  },
});

type StackVariants = VariantProps<typeof stack>;

export type StackProps<T extends ElementType = "div"> = {
  as?: T;
} & StackVariants &
  Omit<ComponentPropsWithRef<T>, "as">;

export const Stack = forwardRef(
  <T extends ElementType = "div">(
    { as, inline, gap, alignItems, className, ...props }: StackProps<T>,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const Component = as || "div";
    return (
      <Component
        ref={ref}
        className={clsx(stack({ inline, gap, alignItems }), className)}
        {...props}
      />
    );
  },
);
