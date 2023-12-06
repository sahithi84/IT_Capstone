import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DownArrow = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10.927 2.988a.421.421 0 0 0-.721-.298L5.494 7.402.782 2.69a.423.423 0 1 0-.598.597l5.011 5.011a.422.422 0 0 0 .598 0l5.01-5.01a.421.421 0 0 0 .124-.3Z"
    />
  </Svg>
)
export  {DownArrow};
