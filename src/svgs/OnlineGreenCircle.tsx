import * as React from 'react';
import Svg, {SvgProps, Circle} from 'react-native-svg';
import {Ref, forwardRef} from 'react';
const SvgComponent = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={8}
    fill="none"
    // @ts-ignore
    ref={ref}
    {...props}>
    <Circle cx={4} cy={4} r={3.5} fill="#A7C586" stroke="#7A9D54" />
  </Svg>
);
const OnlineGreenCircle = forwardRef(SvgComponent);
export {OnlineGreenCircle};
