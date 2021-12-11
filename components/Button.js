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
      isLoading,
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
        {isLoading ? (
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            xmlSpace="preserve"
            className="animate-spin h-6 w-6"
          >
            <path
              fill="#fff"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            />
          </svg>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default Button;
