import * as React from "react"
import Svg, { SvgProps, G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CircleOption = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={9.5} cy={9.5} r={9.5} fill="#F3F3F3" />
    </G>
    <Circle cx={9.5} cy={9.5} r={9} stroke="#B7B2B3" />
    <Defs></Defs>
  </Svg>
)
export  {CircleOption};
