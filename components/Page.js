import cx from "classnames";
import PropTypes from "prop-types";

const Page = ({ children, className }) => (
  <div className={cx("min-h-screen", className)}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Page;
