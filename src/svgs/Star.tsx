import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Star = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <Path
      fill="#E8CE41"
      d="m7 0 1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085L7 0Z"
    />
  </Svg>
)
export  {Star};
