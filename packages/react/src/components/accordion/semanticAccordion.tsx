import React, { forwardRef } from "react";

export const SemanticAccordion = forwardRef<
  HTMLDetailsElement,
  React.HTMLAttributes<HTMLDetailsElement>
>(({ children, ...props }, ref) => {
  return (
    <details ref={ref} {...props}>
      <summary>Details</summary>
      {children}
    </details>
  );
});
