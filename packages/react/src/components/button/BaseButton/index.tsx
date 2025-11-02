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
        "rounded px-4 py-2 font-medium transition-colors",
        "bg-gray-100 hover:bg-gray-200",
        "text-gray-900",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
