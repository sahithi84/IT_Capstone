import * as React from "react"
import Svg, { SvgProps, G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Plus = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={28} cy={24} r={24} fill="#07B037" />
    </G>
    <Path
      fill="#fff"
      d="M19.11 25.04h7.77v7.728c0 .61.497 1.104 1.11 1.104.613 0 1.11-.494 1.11-1.104V25.04h7.77c.613 0 1.11-.494 1.11-1.104 0-.61-.497-1.104-1.11-1.104H29.1v-7.728c0-.61-.497-1.104-1.11-1.104-.613 0-1.11.494-1.11 1.104v7.728h-7.77c-.613 0-1.11.494-1.11 1.104 0 .61.497 1.104 1.11 1.104Z"
    />
    <Defs></Defs>
  </Svg>
)
export  {Plus};
