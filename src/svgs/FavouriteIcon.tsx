import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FavouriteIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10.488 18.751c-.377 0-.753-.143-1.04-.428l-7.514-7.48a6.227 6.227 0 0 1 0-8.797C4.102-.122 7.78-.39 10.306 1.437a.795.795 0 0 0 .945-.009c2.418-1.805 5.623-1.55 7.791.618a6.227 6.227 0 0 1 0 8.796l-7.514 7.481a1.471 1.471 0 0 1-1.04.428ZM6.478.905c-1.499 0-2.987.551-4.06 1.625a5.542 5.542 0 0 0 0 7.829l7.512 7.48a.792.792 0 0 0 1.116 0l7.513-7.48a5.542 5.542 0 0 0 0-7.83c-1.923-1.922-4.76-2.15-6.9-.553a1.476 1.476 0 0 1-1.754.015A5.849 5.849 0 0 0 6.478.905Z"
    />
  </Svg>
);
export { FavouriteIcon };
