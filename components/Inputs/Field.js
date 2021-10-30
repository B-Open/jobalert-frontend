import PropTypes from "prop-types";
import cx from "classnames";

const Field = ({
  label,
  meta,
  hideLabel,
  helper,
  children,
  className,
  ...props
}) => (
  <div className={cx("mb-3", className)}>
    {label && !hideLabel && (
      <label
        htmlFor={props.id || props.name}
        className={cx(
          "block text-sm font-medium text-gray-700",
          helper && "mb-0"
        )}
      >
        {label}
      </label>
    )}
    {helper && <p className="mb-2">{helper}</p>}
    {children}
    {meta.touched && meta.error ? (
      <p className="mt-2 text-sm text-red-600">{meta.error}</p>
    ) : null}
  </div>
);

Field.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hideLabel: PropTypes.bool,
  helper: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.element,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export default Field;
