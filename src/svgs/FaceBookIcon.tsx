import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const FaceBookIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#00AE5A"
        d="M26 13.08C26 5.855 20.18-.002 13-.002 5.818 0-.003 5.855-.003 13.081c0 6.528 4.755 11.94 10.969 12.92v-9.14h-3.3v-3.78h3.303v-2.884c0-3.278 1.942-5.088 4.91-5.088 1.424 0 2.91.255 2.91.255v3.218H17.15c-1.613 0-2.117 1.009-2.117 2.044v2.454h3.604l-.575 3.78h-3.03V26C21.244 25.018 26 19.607 26 13.08Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export { FaceBookIcon };
