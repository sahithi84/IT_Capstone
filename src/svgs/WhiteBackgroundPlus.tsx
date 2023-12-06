import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const WhiteBackgroundPlus = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={9.5} fill="#fff" stroke="#000" />
    <Path
      fill="#00AE5A"
      d="M9.727 14.051V6.858h.972v7.193h-.972Zm-3.113-3.114v-.965h7.199v.966h-7.2Z"
    />
  </Svg>
)
export  {WhiteBackgroundPlus}
