"use client";

import clsx from "clsx";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { useChihayaUIProvider } from "../../provider";
import type { BaseProps } from "../types";

type ElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>;
export const PrimaryButton = forwardRef<
  HTMLButtonElement,
  BaseProps & ElementProps
>(({ children, className, ...props }, ref) => {
  const { disableAnimation } = useChihayaUIProvider();

  return (
    <button
      ref={ref}
      className={clsx(
        "rounded px-4 py-2 font-medium",
        !disableAnimation && "transition-colors",
        "bg-blue-600 hover:bg-blue-700",
        "text-white",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
