import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LineDashed = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={309}
    height={1}
    fill="none"
    {...props}
  >
    <Path stroke="#B7B2B3" strokeDasharray="4 4 4 4" d="M0 .5h309" />
  </Svg>
)
export  {LineDashed};
