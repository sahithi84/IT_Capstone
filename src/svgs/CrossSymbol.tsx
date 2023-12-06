import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const CrossSymbol = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <Circle
      cx={13}
      cy={13}
      r={12}
      fill="#fff"
      stroke="#263238"
      strokeWidth={2}
    />
    <Path
      fill="#000"
      d="M17.225 8.096c.152.063.29.156.406.273a1.249 1.249 0 0 1 0 1.773L14.76 13l2.87 2.858a1.248 1.248 0 0 1 0 1.773 1.248 1.248 0 0 1-1.772 0L13 14.76l-2.858 2.87a1.248 1.248 0 0 1-1.773 0 1.248 1.248 0 0 1 0-1.772L11.24 13l-2.87-2.858a1.253 1.253 0 1 1 1.772-1.773L13 11.24l2.858-2.87a1.248 1.248 0 0 1 1.367-.274Z"
    />
  </Svg>
)
export  {CrossSymbol};
