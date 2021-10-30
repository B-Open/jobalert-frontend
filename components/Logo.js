import Image from "next/image";
import LogoImage from "../public/images/logo.png";

const Logo = ({
  width,
  height,
  layout = "fixed",
  objectFit = "contain",
  className,
  ...props
}) => (
  <Image
    className={className}
    src={LogoImage}
    width={width}
    height={height}
    layout={layout}
    objectFit={objectFit}
    alt="B-open Logo"
    {...props}
  />
);

export const SmallLogo = (props) => <Logo width={50} height={50} {...props} />;

export default Logo;
