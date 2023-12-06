import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const YourLocationIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    {...props}
  >
    <Circle cx={4} cy={4} r={4} fill="#00AE5A" />
  </Svg>
);
export { YourLocationIcon };
