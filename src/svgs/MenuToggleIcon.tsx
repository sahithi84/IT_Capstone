import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MenuToggleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={10}
    // viewBox="0 0 8 8"
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 1h15M1 5h15M1 9h15"
    />
  </Svg>
);
export { MenuToggleIcon };
