import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
const JoinNowImg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={254}
    height={345}
    fill="none"
    {...props}
  >
    <Path
      fill="#00AE5A"
      d="M127.597 254.61c-15.027 0-28.827-3.527-41.4-10.58-12.573-7.053-22.54-16.79-29.9-29.21-7.36-12.573-11.04-26.757-11.04-42.55 0-15.64 3.68-29.67 11.04-42.09 7.36-12.573 17.327-22.387 29.9-29.44 12.573-7.053 26.373-10.58 41.4-10.58 15.18 0 28.98 3.527 41.4 10.58 12.573 7.053 22.463 16.867 29.67 29.44 7.36 12.42 11.04 26.45 11.04 42.09 0 15.793-3.68 29.977-11.04 42.55-7.207 12.42-17.097 22.157-29.67 29.21-12.573 7.053-26.373 10.58-41.4 10.58Zm0-28.75c9.66 0 18.17-2.147 25.53-6.44 7.36-4.447 13.11-10.733 17.25-18.86 4.14-8.127 6.21-17.557 6.21-28.29s-2.07-20.087-6.21-28.06c-4.14-8.127-9.89-14.337-17.25-18.63-7.36-4.293-15.87-6.44-25.53-6.44-9.66 0-18.247 2.147-25.76 6.44-7.36 4.293-13.11 10.503-17.25 18.63-4.14 7.973-6.21 17.327-6.21 28.06 0 10.733 2.07 20.163 6.21 28.29 4.14 8.127 9.89 14.413 17.25 18.86 7.513 4.293 16.1 6.44 25.76 6.44Z"
    />
    <Circle cx={127} cy={172} r={127} fill="url(#a)" />
    <Path
      fill="#6EC192"
      stroke="#080808"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M113 179.294 123 152h12.875l-9 20.471H143L113 210l13.875-30.706H113Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 127 -127 0 127 172)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={0.682} stopColor="#fff" stopOpacity={0} />
        <Stop offset={0.839} stopColor="#9FE0BB" />
        <Stop offset={0.995} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export { JoinNowImg };
