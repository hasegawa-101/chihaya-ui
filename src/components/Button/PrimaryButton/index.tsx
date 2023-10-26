import { ButtonHTMLAttributes, forwardRef } from "react";
import { BaseProps } from "../types.ts";
import clsx from "clsx";
import { baseButtonStyle } from "./index.css";

type ElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>;
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  BaseProps & ElementProps
>(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={clsx(className, baseButtonStyle)} {...props}>
      {children}
    </button>
  );
});
