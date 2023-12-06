import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const SkipIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Circle cx={20} cy={20} r={20} fill="#E0E6E2" />
    <Path
      fill="#000"
      d="M17.075 12.1a.575.575 0 0 0-.407.983l6.425 6.425-6.425 6.426a.576.576 0 0 0 .815.815l6.833-6.833a.576.576 0 0 0 0-.815l-6.833-6.833a.574.574 0 0 0-.408-.169Z"
    />
  </Svg>
);
export { SkipIcon };
