import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DottedVerticalLine = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={1}
    height={41}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeDasharray="1 3"
      strokeLinecap="round"
      d="M.5.5v40"
    />
  </Svg>
);
export { DottedVerticalLine };
