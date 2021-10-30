import { forwardRef } from "react";
import cx from "classnames";
import Link from "next/link";

const Button = forwardRef(
  (
    {
      children,
      to,
      className,
      type = "button",
      buttonType = "default",
      size = "medium",
      ...props
    },
    ref
  ) => {
    const _className = cx(
      {
        [`font-${size}`]: size,
      },
      "inline-flex items-center justify-center px-4 py-2",
      buttonType === "default" && "text-base text-gray-500 hover:text-gray-900",
      buttonType === "primary" &&
        "border border-transparent rounded-md shadow-sm text-base text-white bg-primary-600 hover:bg-primary-700",
      className
    );

    if (to) {
      return (
        <Link href={to} passHref>
          <a ref={ref} className={_className} {...props}>
            {children}
          </a>
        </Link>
      );
    }
    return (
      <button ref={ref} type={type} className={_className} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
