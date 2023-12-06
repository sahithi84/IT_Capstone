import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Ref, forwardRef} from 'react';
const SvgComponent = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    // @ts-ignore
    ref={ref}
    {...props}>
    <Path
      fill="#545454"
      d="M9 1.969A7.031 7.031 0 1 0 16.031 9 7.04 7.04 0 0 0 9 1.969Zm0 13.5A6.469 6.469 0 1 1 15.469 9 6.476 6.476 0 0 1 9 15.469ZM13.219 9a.281.281 0 0 1-.281.281H9A.281.281 0 0 1 8.719 9V5.062a.281.281 0 1 1 .562 0V8.72h3.656A.281.281 0 0 1 13.22 9Z"
    />
  </Svg>
);
const RoundedClockIcon = forwardRef(SvgComponent);
export {RoundedClockIcon};
