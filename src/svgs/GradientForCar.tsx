import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
import { Ref, forwardRef } from "react";
const SvgComponent = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={415}
    height={363}
    fill="none"
    ref={ref}
    {...props}
  >
    <Circle cx={266} cy={149} r={149} fill="url(#a)" />
    <Circle cx={149} cy={214} r={149} fill="url(#b)" />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(90 50.429 215.571) scale(132.858)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0D5891" />
        <Stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 132.858 -132.858 0 149 230.142)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00AE5A" />
        <Stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
const GradientForCar = forwardRef(SvgComponent);
export { GradientForCar };
