import type React from "react";
import {
  type ComponentPropsWithRef,
  forwardRef,
  type PropsWithChildren,
} from "react";

type Props = PropsWithChildren<{
  as?: React.ElementType;
}> &
  ComponentPropsWithRef<"div">;

export const Component = forwardRef<HTMLDivElement, Props>(
  ({ as: Component = "div", children, className, ...props }, ref) => {
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  },
);
