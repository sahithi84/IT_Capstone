import * as React from "react"
import Svg, { SvgProps, Path, Rect } from "react-native-svg"
const ReferralImage = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={271}
    height={157}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={2}
      d="M269.424 19.805v17.612c-20.136 2.769-35.701 20.085-35.701 40.97 0 20.886 15.562 38.203 35.695 40.975v17.612c0 10.368-8.437 18.802-18.795 18.802H71.721v-16.105a5.658 5.658 0 0 0-5.658-5.661 5.663 5.663 0 0 0-5.668 5.661v16.105H19.802C9.437 155.776 1 147.342 1 136.974v-17.612c20.14-2.769 35.701-20.089 35.701-40.974 0-20.886-15.562-38.2-35.698-40.97V19.804C1.003 9.437 9.441 1 19.805 1H60.4V18.45a5.664 5.664 0 0 0 5.667 5.66 5.658 5.658 0 0 0 5.658-5.66V1H250.63c10.355 0 18.795 8.437 18.795 18.805Z"
    />
    <Rect
      width={10.858}
      height={30.146}
      x={60.471}
      y={40.443}
      stroke="#000"
      strokeWidth={2}
      rx={5.429}
    />
    <Rect
      width={10.858}
      height={30.146}
      x={60.471}
      y={88.662}
      stroke="#000"
      strokeWidth={2}
      rx={5.429}
    />
  </Svg>
)
export  {ReferralImage}
