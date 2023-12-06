import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const GoogleIcon = (props: SvgProps) => (
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
        d="M25.26 10.657c.152.872.228 1.756.226 2.642 0 3.955-1.413 7.3-3.873 9.563h.003C19.464 24.85 16.506 26 13 26a13 13 0 0 1 0-26 12.495 12.495 0 0 1 8.697 3.383l-3.712 3.712A7.064 7.064 0 0 0 13 5.145c-3.391 0-6.272 2.288-7.3 5.369a7.787 7.787 0 0 0 0 4.977h.005c1.032 3.076 3.909 5.364 7.3 5.364 1.752 0 3.256-.448 4.423-1.241h-.005a6.016 6.016 0 0 0 2.599-3.95H13v-5.006l12.26-.001Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export { GoogleIcon };
