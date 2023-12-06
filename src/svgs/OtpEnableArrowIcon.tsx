import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const OtpEnableArrowIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={36}
    fill="none"
    {...props}
  >
    <Circle cx={18} cy={18} r={18} fill="#00AE5A" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.5 18a.812.812 0 0 0 .813.813h9.413L20.237 22.3a.814.814 0 0 0 1.15 1.15l4.876-4.875a.815.815 0 0 0 0-1.15l-4.875-4.875a.814.814 0 0 0-1.15 1.15l3.488 3.488h-9.413A.812.812 0 0 0 13.5 18Z"
      clipRule="evenodd"
    />
    <Circle cx={20} cy={18} r={17.5} stroke="#000" />
  </Svg>
);
export { OtpEnableArrowIcon };
