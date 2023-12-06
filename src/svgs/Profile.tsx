import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"
const Profile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Circle cx={22.5} cy={22.5} r={22.5} fill="#263238" />
    <Circle cx={22.5} cy={22.5} r={20.224} fill="#263238" stroke="#00AE5A" />
    <Path
      fill="#B7B2B3"
      d="M21.69 8.937c-2.858.356-4.475 2.19-4.81 5.435-.053.507-.075.593-.172.668-.399.27-.571.604-.68 1.305-.172 1.208.044 2.135.69 2.933.335.41.626.614.96.647.26.021.27.021.518.399.226.345.27.442.399 1.1.162.787.55 2.048.787 2.576.56 1.23 1.445 1.769 3.062 1.855.96.043 1.855-.097 2.459-.41.496-.259.96-.765 1.25-1.401.26-.55.647-1.79.81-2.62.14-.67.172-.766.398-1.1.248-.378.259-.378.518-.4.334-.032.625-.226.96-.646.635-.787.851-1.725.69-2.933-.098-.69-.281-1.035-.68-1.305-.097-.064-.119-.161-.172-.668-.346-3.3-1.974-5.111-4.907-5.445a11.16 11.16 0 0 0-2.08.01Z"
    />
    <Path
      fill="#B7B2B3"
      d="M17.603 25.23c-.56.312-1.11.506-1.984.711-1.844.442-2.124.518-2.49.669-1.866.765-3.041 2.965-3.063 5.693v.798l.194.345c.227.399.583.7.982.82.237.064 1.703.075 11.655.064l11.387-.01.27-.13c.57-.28.926-.83.97-1.52.021-.464-.065-1.402-.205-2.07-.388-1.866-1.337-3.246-2.674-3.882-.486-.238-.852-.345-2.081-.615-1.068-.237-1.78-.474-2.47-.83-.312-.151-.56-.248-.57-.216-.055.173-.486.766-.777 1.057-.626.657-1.424 1.067-2.47 1.305-.722.161-2.253.161-2.975 0-1.079-.238-1.866-.658-2.523-1.36a4.138 4.138 0 0 1-.55-.722c-.097-.183-.194-.323-.216-.323-.022.01-.205.108-.41.216Z"
    />
  </Svg>
)
export  {Profile};
