import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Ref, forwardRef} from 'react';
const SvgComponent = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    // @ts-ignore
    ref={ref}
    {...props}>
    <Path
      fill="#ffffff"
      d="M12.5 2.344C6.9 2.344 2.344 6.9 2.344 12.5c0 5.6 4.556 10.156 10.156 10.156 5.6 0 10.156-4.556 10.156-10.156 0-5.6-4.556-10.156-10.156-10.156Zm0 1.562a8.582 8.582 0 0 1 8.594 8.594 8.582 8.582 0 0 1-8.594 8.594A8.582 8.582 0 0 1 3.906 12.5 8.582 8.582 0 0 1 12.5 3.906Zm-.781 3.906v3.907H7.813v1.562h3.906v3.906h1.562v-3.906h3.906V11.72h-3.906V7.813H11.72Z"
    />
  </Svg>
);
const RoundedPlusIcon = forwardRef(SvgComponent);
export {RoundedPlusIcon};
