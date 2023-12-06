import * as React from "react";
import Svg, {
  SvgProps,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const FindingDriverImg = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={156}
    height={156}
    fill="none"
    {...props}
  >
    <Circle cx={78} cy={78} r={32} stroke="#00AE5A" strokeWidth={2} />
    <Circle cx={78} cy={78} r={55} stroke="#00AE5A" strokeWidth={2} />
    <Circle cx={78} cy={78} r={77} stroke="#00AE5A" strokeWidth={2} />
    <Path
      fill="url(#a)"
      d="M105.643 78.521c-.195-.694-.61-1.625-1.461-2.21-3.915-2.364-9.075-2.974-9.721-3.037-.648-.064-1.685-.218-1.685-.218s-5.418-4.471-10.557-6.16c-5.138-1.69-15.716-.488-16.628-.397-2.161.204-8.04 4.834-8.04 4.834s-6.415 1.234-6.909 1.7c-.492.467-.657 2.748-.64 4.87.016 2.121.371 5.034.371 5.034l5.335.34a6.03 6.03 0 0 1-.056-.776c0-3.135 2.39-5.678 5.337-5.678 2.948 0 5.337 2.626 5.337 5.76 0 .588-.083 1.14-.238 1.767h24.245c-.157-.627-.24-1.18-.24-1.766 0-3.135 2.39-5.719 5.338-5.719 2.947 0 5.337 2.522 5.337 5.657 0 .496-.065.962-.178 1.421 1.064.049 4.964.201 5.265-.017.348-.253-.015-4.71-.212-5.405Zm-40.181-5.787s-.062-3.46.815-4.314c.878-.853 6.585-.634 6.86-.656.275-.02.534.3.555.604l.32 4.888-8.55-.522Zm20.69.943-9.95-.263s-.957-5.09-.998-5.295c-.04-.207.14-.353.444-.354.304 0 4.362.39 6.44 1.18 2.828 1.073 5.3 3.074 5.3 3.074l-1.237 1.658Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={78}
        x2={78}
        y1={75}
        y2={84}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export { FindingDriverImg };
