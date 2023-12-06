import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Wallet
 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={40}
    fill="none"
    {...props}
  >
    <G fill="#000" clipPath="url(#a)">
      <Path d="M21 6.596 14.966 9.52 21 9.279V6.596ZM21 4.374v-.372c0-.337-.16-.64-.44-.828a.989.989 0 0 0-.931-.1L6.517 9.857 9.97 9.72 21 4.374ZM28 11l-24.958.999a.981.981 0 0 0-.042.285V28c0 .552.449 1 1 1h24a1 1 0 0 0 1-1v-3h-7c-2.757 0-5-2.243-5-5s2.243-5 5-5h7v-3a1 1 0 0 0-1-1ZM7 26a1 1 0 1 1-2 0V15a1 1 0 1 1 2 0v11Z" />
      <Path d="M22 17c-1.654 0-3 1.346-3 3s1.346 3 3 3h7v-6h-7Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export  {Wallet}

