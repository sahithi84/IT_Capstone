import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const TimerInvoice = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#00AE5A"
      d="M12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.388 12-12S18.612 0 12 0Zm0 22.04C6.476 22.04 1.96 17.525 1.96 12 1.96 6.476 6.475 1.96 12 1.96c5.524 0 10.04 4.516 10.04 10.04 0 5.524-4.489 10.04-10.04 10.04Z"
    />
    <Path
      fill="#00AE5A"
      d="M12.98 11.592V4a.976.976 0 0 0-.98-.98.976.976 0 0 0-.98.98v8c0 .136.028.245.082.354v.027c.055.109.109.218.218.326l3.918 3.919c.19.19.436.3.68.3.245 0 .49-.11.68-.3a.985.985 0 0 0 0-1.388l-3.618-3.646Z"
    />
  </Svg>
)
export  {TimerInvoice};
