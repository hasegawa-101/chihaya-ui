import { ButtonHTMLAttributes, forwardRef } from "react";
import { BaseProps } from "../types.ts";
import clsx from "clsx";
import { buttonStyle } from "./index.css";

type ElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>;
export const BaseButton = forwardRef<
  HTMLButtonElement,
  BaseProps & ElementProps
>(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={clsx(className, buttonStyle)} {...props}>
      {children}
    </button>
  );
});
