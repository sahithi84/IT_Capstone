import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={9.5} fill="#00AE5A" stroke="#000" />
    <Path
      fill="#fff"
      d="M9.315 13.527V7.493h1.526v6.034H9.315Zm-2.254-2.254V9.747h6.034v1.526H7.061Z"
    />
  </Svg>
);
export { PlusIcon };
