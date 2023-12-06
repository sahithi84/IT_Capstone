import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Dotted = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={197}
    height={2}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeDasharray="2 4 6 8"
      strokeWidth={2}
      d="M0 1h197"
    />
  </Svg>
)
export  {Dotted};
