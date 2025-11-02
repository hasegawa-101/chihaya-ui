"use client";

import {
  type ChangeEventHandler,
  type ComponentPropsWithRef,
  forwardRef,
  type PropsWithChildren,
  useCallback,
  useId,
  useMemo,
} from "react";

import { tv } from "tailwind-variants";

const radioButtonStyle = tv({
  slots: {
    wrapper: "inline-flex w-full items-baseline",
    innerWrapper:
      "relative inline-block size-[1em] shrink-0 translate-y-[0.125em] transform",
    box: [
      "pointer-events-none absolute size-full rounded-full border bg-white",
      "peer-checked:border-primary peer-checked:bg-primary",
      "peer-checked:before:absolute peer-checked:before:left-1/2 peer-checked:before:top-1/2 peer-checked:before:size-[0.5em] peer-checked:before:translate-x-[-50%] peer-checked:before:translate-y-[-50%] peer-checked:before:rounded-full peer-checked:before:border-primary peer-checked:before:bg-white",
      "peer-focus-visible:focus-ring-primary",
    ],
    label: "ms-3 cursor-pointer",
    radio: "radioInput peer absolute size-full cursor-pointer opacity-0",
  },
});

type RadioButtonProps = PropsWithChildren<ComponentPropsWithRef<"input">>;

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ onChange, children, className, ...props }, ref) => {
    const {
      wrapperStyle,
      innerWrapperStyle,
      boxStyle,
      radioStyle,
      labelStyle,
    } = useMemo(() => {
      const { wrapper, innerWrapper, box, radio, label } = radioButtonStyle();
      return {
        wrapperStyle: wrapper({ className }),
        innerWrapperStyle: innerWrapper(),
        boxStyle: box({}),
        radioStyle: radio(),
        labelStyle: label({}),
      };
    }, [className]);

    const radioButtonId = useId();

    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
      (e) => {
        if (onChange) {
          onChange(e);
        }
      },
      [onChange],
    );

    return (
      <span className={wrapperStyle}>
        <span className={innerWrapperStyle}>
          <input
            type={"radio"}
            id={radioButtonId}
            onChange={handleChange}
            ref={ref}
            {...props}
            className={radioStyle}
          />
          <span className={boxStyle} />
        </span>
        <label htmlFor={radioButtonId} className={labelStyle}>
          {children}
        </label>
      </span>
    );
  },
);
