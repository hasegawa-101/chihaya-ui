import React, { forwardRef } from "react";

export const BaseDialog = forwardRef<
  HTMLDialogElement,
  React.HTMLAttributes<HTMLDialogElement>
>(({ children, ...props }, ref) => {
  return (
    <dialog ref={ref} {...props}>
      {children}
    </dialog>
  );
});
