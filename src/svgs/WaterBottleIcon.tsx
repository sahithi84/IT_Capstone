import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const WaterBottleIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M1.68 12.573 3.583 8.65c.243-.62.442-1.672.442-2.338V1.832h2.543v4.48c0 .667.2 1.72.442 2.34l2.023 3.92c.243.621.442 1.673.442 2.34v10.536c0 .666-.545 1.332-1.211 1.332H2.45c-.667 0-1.212-.666-1.212-1.332V14.91c0-.666.2-1.718.443-2.338Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2.898 17.636a2.705 2.705 0 0 1 4.915 0M7.795 22.36a2.705 2.705 0 0 1-4.878 0M8.505 18.787H2.328M8.505 21.209H2.328"
    />
    <Path
      fill="#EFEFEF"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3.54 1.92c.439 0 .439.281.878.281s.439-.28.878-.28c.44 0 .44.28.878.28.439 0 .439-.28.878-.28v-.504c0-.161-.264-.312-.586-.312h-2.34c-.323 0-.586.15-.586.312v.503Z"
    />
  </Svg>
);
export { WaterBottleIcon };
