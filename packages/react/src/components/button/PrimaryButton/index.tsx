import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { BaseProps } from "../types";

type ElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>;
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  BaseProps & ElementProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        "chu-px-4 chu-py-2 chu-rounded chu-font-medium chu-transition-colors",
        "chu-bg-blue-600 hover:chu-bg-blue-700",
        "chu-text-white",
        "disabled:chu-opacity-50 disabled:chu-cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
