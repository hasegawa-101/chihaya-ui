import { Check } from "lucide-react";
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

const checkBoxComponentStyle = tv({
  slots: {
    wrapper: "inline-flex w-full items-baseline",
    innerWrapper:
      "relative inline-block size-[1em] shrink-0 translate-y-[0.125em] transform",
    box: [
      "pointer-events-none absolute size-full rounded border bg-white",
      "peer-checked:border-primary peer-checked:bg-primary",
      "peer-focus-visible:focus-ring-primary",
    ],
    label: "ms-3 cursor-pointer",
    icon: "fill-current",
    iconWrapper: [
      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-transparent",
      "peer-checked:text-white",
    ],
    checkBox: "checkBoxInput peer absolute size-full opacity-0",
  },
});

type CheckboxProps = PropsWithChildren<ComponentPropsWithRef<"input">>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ onChange, checked, children, className, ...props }, ref) => {
    const {
      wrapperStyle,
      innerWrapperStyle,
      boxStyle,
      checkBoxStyle,
      labelStyle,
      iconWrapperStyle,
      iconStyle,
    } = useMemo(() => {
      const { wrapper, innerWrapper, box, checkBox, iconWrapper, icon, label } =
        checkBoxComponentStyle();

      return {
        wrapperStyle: wrapper({ className }),
        innerWrapperStyle: innerWrapper(),
        boxStyle: box({}),
        checkBoxStyle: checkBox(),
        iconStyle: icon(),
        iconWrapperStyle: iconWrapper(),
        labelStyle: label({}),
      };
    }, [className]);

    const checkBoxId = useId();

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
            type={"checkbox"}
            className={checkBoxStyle}
            id={checkBoxId}
            ref={ref}
            onChange={handleChange}
            checked={checked}
            {...props}
          />
          <span className={boxStyle} />
          <span className={iconWrapperStyle}>
            <Check
              className={iconStyle}
              role={"img"}
              aria-hidden={true}
              size="1em"
            />
          </span>
        </span>
        <label htmlFor={checkBoxId} className={labelStyle}>
          {children}
        </label>
      </span>
    );
  },
);
