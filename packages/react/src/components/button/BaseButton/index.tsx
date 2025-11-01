import clsx from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import type { BaseProps } from "../types";

type ElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>;
export const BaseButton = forwardRef<
  HTMLButtonElement,
  BaseProps & ElementProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        "chu-px-4 chu-py-2 chu-rounded chu-font-medium chu-transition-colors",
        "chu-bg-gray-100 hover:chu-bg-gray-200",
        "chu-text-gray-900",
        "disabled:chu-opacity-50 disabled:chu-cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
