import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
import { Ref, forwardRef } from "react";

const SvgComponent = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={21}
    height={21}
    fill="none"
    // @ts-ignore
    ref={ref}
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h21v21H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00781)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={128}
        height={128}
      />
    </Defs>
  </Svg>
);
const YellowMapPin = forwardRef(SvgComponent);
export { YellowMapPin };
