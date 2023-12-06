import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Arrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M28.5 19a1.188 1.188 0 0 1-1.187 1.188H13.554l5.1 5.096a1.19 1.19 0 0 1-1.682 1.682L9.847 19.84a1.187 1.187 0 0 1 0-1.682l7.125-7.125a1.189 1.189 0 0 1 1.681 1.682l-5.099 5.097h13.759A1.188 1.188 0 0 1 28.5 19Z"
      clipRule="evenodd"
    />
  </Svg>
);
export { Arrow };
