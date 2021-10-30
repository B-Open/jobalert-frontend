import { forwardRef } from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import cx from "classnames";
import Field from "./Field";

export const Input = forwardRef(
  (
    {
      helper,
      label,
      hideLabel,
      className,
      append,
      autoComplete = "off",
      ...props
    },
    ref
  ) => {
    const [field, meta] = useField(props);
    return (
      <Field
        meta={meta}
        label={label}
        hideLabel={hideLabel}
        helper={helper}
        name={field.name}
        className={className}
      >
        <div className="relative rounded-md shadow-sm" ref={ref}>
          <input
            type="text"
            className={cx(
              "appearance-none min-w-0 w-full bg-white border rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400",
              meta &&
                meta.error &&
                meta.touched &&
                "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 focus:outline-none",
              meta &&
                !meta.error &&
                meta.touched &&
                "border-green-300 text-green-900 placeholder-green-300 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            )}
            autoComplete={autoComplete}
            {...field}
            {...props}
          />
          {meta && meta.error && meta.touched && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          {append && <span className="faraid-append">{append}</span>}
        </div>
      </Field>
    );
  }
);

Input.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
  helper: PropTypes.string,
  append: PropTypes.element,
  innerRef: PropTypes.func,
  autoComplete: PropTypes.string,
  innerColumn: PropTypes.bool,
};
