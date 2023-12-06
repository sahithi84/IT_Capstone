import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Eye = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M14.04 7c0 2.21-1.814 4-4.051 4-2.238 0-4.052-1.79-4.052-4S7.752 3 9.99 3c2.237 0 4.051 1.79 4.051 4Zm-1.013 0c0 1.657-1.36 3-3.038 3C8.31 10 6.95 8.657 6.95 7S8.31 4 9.99 4c1.678 0 3.038 1.343 3.038 3Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M19.859 6.36C14.542-2.23 5.665-2 .156 6.33a.942.942 0 0 0-.053.947c4.638 8.974 15.664 8.964 19.813-.031a.944.944 0 0 0-.057-.886ZM10.19 13c-3.425.005-7.004-1.979-9.17-6.148C3.644 2.896 6.954 1.022 10.086 1c3.119-.021 6.369 1.793 8.894 5.86-1.927 4.153-5.373 6.135-8.79 6.14Z"
      clipRule="evenodd"
    />
  </Svg>
)
export  {Eye} ;
