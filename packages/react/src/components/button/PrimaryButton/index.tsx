import clsx from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import type { BaseProps } from "../types";

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
        "px-4 py-2 rounded font-medium transition-colors",
        "bg-blue-600 hover:bg-blue-700",
        "text-white",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
