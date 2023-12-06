import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {Ref, forwardRef} from 'react';
const SvgComponent = (props: SvgProps, ref: Ref<SVGSVGElement>) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    // @ts-ignore
    ref={ref}
    {...props}>
    <Path
      fill="#796F6F"
      d="M11 18.333c-4.043 0-7.333-3.29-7.333-7.333 0-4.042 3.29-7.333 7.333-7.333 4.042 0 7.333 3.29 7.333 7.333s-3.29 7.333-7.333 7.333Zm0-16.5A9.158 9.158 0 0 0 1.833 11 9.158 9.158 0 0 0 11 20.167 9.158 9.158 0 0 0 20.167 11 9.158 9.158 0 0 0 11 1.833Zm2.374 5.5L11 9.708 8.626 7.333 7.333 8.626 9.707 11l-2.374 2.374 1.293 1.293L11 12.293l2.374 2.374 1.293-1.293L12.292 11l2.375-2.374-1.293-1.293Z"
    />
  </Svg>
);
const RoundedCloseIcon = forwardRef(SvgComponent);
export {RoundedCloseIcon};
