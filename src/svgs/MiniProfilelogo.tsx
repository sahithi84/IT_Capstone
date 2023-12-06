import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const MiniProfilelogo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <Circle
      cx={16.5}
      cy={16.5}
      r={16}
      fill="#080808"
      fillOpacity={0.01}
      stroke="#00AE5A"
    />
    <Path
      fill="#000"
      d="M16.046 6.89c-2.108.262-3.3 1.614-3.547 4.008-.04.374-.056.437-.128.493-.294.199-.421.445-.5.962-.128.891.031 1.575.508 2.164.247.302.462.453.708.477.191.016.199.016.382.294.167.255.199.326.294.812.12.58.406 1.51.58 1.9.414.907 1.067 1.305 2.26 1.369.708.031 1.368-.072 1.813-.303.366-.19.708-.564.923-1.034.19-.405.477-1.32.596-1.932.104-.494.128-.565.295-.812.183-.278.19-.278.381-.294.247-.024.462-.167.708-.477.47-.58.629-1.273.51-2.164-.072-.509-.207-.763-.502-.962-.071-.048-.087-.12-.127-.493-.255-2.434-1.456-3.77-3.619-4.017a8.23 8.23 0 0 0-1.535.008Z"
    />
    <Path
      fill="#000"
      d="M13.031 18.907c-.413.231-.819.374-1.463.525-1.36.326-1.567.382-1.837.493-1.376.565-2.243 2.188-2.26 4.2v.589l.144.254c.167.294.43.517.724.605.175.047 1.256.055 8.598.047l8.399-.008.199-.095c.421-.207.684-.613.716-1.122.016-.342-.048-1.034-.152-1.527-.286-1.376-.986-2.394-1.972-2.863-.358-.175-.628-.255-1.535-.453-.787-.175-1.313-.35-1.822-.613-.23-.111-.413-.183-.421-.159-.04.127-.358.565-.573.78-.461.485-1.05.787-1.821.962-.533.12-1.662.12-2.195 0-.796-.175-1.377-.485-1.862-1.002a3.049 3.049 0 0 1-.405-.533c-.072-.135-.143-.239-.16-.239l-.302.16Z"
    />
  </Svg>
)
export  {MiniProfilelogo};
