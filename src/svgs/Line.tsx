import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Line = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={292}
    height={1}
    fill="none"
    {...props}
  >
    <Path stroke="#F3F0E2" d="M0 .5h292" />
  </Svg>
)
export  {Line}
