import * as React from "react";
import Svg, { SvgProps, G, Rect, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Co2GreenCloud = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={58}
    fill="none"
    {...props}
  >
    <G fill="#00AE5A" filter="url(#a)">
      <Rect width={79.842} height={27.835} x={4} y={25.975} rx={13.917} />
      <Circle cx={53.809} cy={23.777} r={19.777} />
      <Circle cx={31.467} cy={27.806} r={15.749} />
    </G>
    <Path
      fill="#fff"
      d="M30.37 25.14c0-1.108.24-2.095.72-2.96a5.093 5.093 0 0 1 2-2.031c.864-.49 1.84-.736 2.928-.736 1.333 0 2.474.352 3.424 1.056.95.704 1.584 1.664 1.904 2.88h-3.008a2.414 2.414 0 0 0-.96-1.072 2.634 2.634 0 0 0-1.392-.368c-.843 0-1.525.293-2.048.88-.523.586-.784 1.37-.784 2.352 0 .981.261 1.765.784 2.352s1.205.88 2.048.88c.523 0 .986-.123 1.392-.368.416-.245.736-.603.96-1.072h3.008c-.32 1.216-.955 2.176-1.904 2.88-.95.693-2.09 1.04-3.424 1.04-1.088 0-2.064-.24-2.928-.72a5.232 5.232 0 0 1-2-2.032c-.48-.864-.72-1.85-.72-2.96Zm17.963 5.745a5.908 5.908 0 0 1-2.912-.736 5.596 5.596 0 0 1-2.096-2.048c-.512-.886-.768-1.877-.768-2.976s.256-2.085.768-2.96a5.595 5.595 0 0 1 2.096-2.048 5.906 5.906 0 0 1 2.912-.736c1.056 0 2.022.245 2.896.736a5.331 5.331 0 0 1 2.08 2.048c.512.875.768 1.861.768 2.96s-.256 2.09-.768 2.976a5.478 5.478 0 0 1-2.08 2.048c-.874.49-1.84.736-2.896.736Zm0-2.496c.896 0 1.611-.299 2.144-.896.544-.598.816-1.387.816-2.368 0-.992-.272-1.782-.816-2.368-.533-.598-1.248-.896-2.144-.896-.906 0-1.632.293-2.176.88-.533.587-.8 1.381-.8 2.384 0 .992.267 1.787.8 2.384.544.587 1.27.88 2.176.88Zm6.664 1.014a37.02 37.02 0 0 0 1.85-1.58c.38-.347.7-.71.96-1.09.26-.38.39-.75.39-1.11 0-.274-.063-.487-.19-.64-.126-.154-.316-.23-.57-.23a.713.713 0 0 0-.6.29c-.14.187-.21.453-.21.8h-1.65c.014-.567.134-1.04.36-1.42.234-.38.537-.66.91-.84.38-.18.8-.27 1.26-.27.794 0 1.39.203 1.79.61.407.407.61.937.61 1.59 0 .713-.243 1.377-.73 1.99-.486.607-1.106 1.2-1.86 1.78h2.7v1.39h-5.02v-1.27ZM14.31 43.129a44.442 44.442 0 0 0 2.22-1.896c.456-.416.84-.852 1.152-1.308.312-.456.468-.9.468-1.332 0-.328-.076-.584-.228-.768-.152-.184-.38-.276-.684-.276a.855.855 0 0 0-.72.348c-.168.224-.252.544-.252.96h-1.98c.016-.68.16-1.248.432-1.704a2.59 2.59 0 0 1 1.092-1.008c.456-.216.96-.324 1.512-.324.952 0 1.668.244 2.148.732.488.488.732 1.124.732 1.908 0 .856-.292 1.652-.876 2.388-.584.728-1.328 1.44-2.232 2.136h3.24v1.668H14.31v-1.524Zm6.927-2.856c0-1.376.264-2.46.792-3.252.536-.792 1.396-1.188 2.58-1.188 1.184 0 2.04.396 2.568 1.188.536.792.804 1.876.804 3.252 0 1.392-.268 2.484-.804 3.276-.528.792-1.384 1.188-2.568 1.188-1.184 0-2.044-.396-2.58-1.188-.528-.792-.792-1.884-.792-3.276Zm4.728 0c0-.808-.088-1.428-.264-1.86-.176-.44-.54-.66-1.092-.66s-.916.22-1.092.66c-.176.432-.264 1.052-.264 1.86 0 .544.032.996.096 1.356.064.352.192.64.384.864.2.216.492.324.876.324s.672-.108.864-.324c.2-.224.332-.512.396-.864.064-.36.096-.812.096-1.356Zm6.124-2.22c.512 0 .964.104 1.356.312.4.2.712.452.936.756v-.96h1.38v6.72c0 .608-.128 1.148-.384 1.62-.256.48-.628.856-1.116 1.128-.48.272-1.056.408-1.728.408-.896 0-1.64-.212-2.232-.636a2.306 2.306 0 0 1-1.008-1.704h1.356c.104.344.324.62.66.828.344.216.752.324 1.224.324.552 0 .996-.168 1.332-.504.344-.336.516-.824.516-1.464v-1.104a2.834 2.834 0 0 1-.948.792c-.392.208-.84.312-1.344.312a3.021 3.021 0 0 1-1.584-.432 3.206 3.206 0 0 1-1.128-1.224c-.272-.528-.408-1.124-.408-1.788 0-.664.136-1.252.408-1.764a3.047 3.047 0 0 1 2.712-1.62Zm2.292 3.408c0-.456-.096-.852-.288-1.188a1.938 1.938 0 0 0-.732-.768 1.93 1.93 0 0 0-.984-.264c-.352 0-.68.088-.984.264-.304.168-.552.42-.744.756-.184.328-.276.72-.276 1.176 0 .456.092.856.276 1.2.192.344.44.608.744.792a1.974 1.974 0 0 0 1.968 0c.304-.176.548-.432.732-.768.192-.344.288-.744.288-1.2Zm8.12 3.42c-.52 0-.988-.092-1.404-.276a2.536 2.536 0 0 1-.972-.768 1.943 1.943 0 0 1-.384-1.092h1.416a.99.99 0 0 0 .396.708c.248.184.556.276.924.276.384 0 .68-.072.888-.216.216-.152.324-.344.324-.576 0-.248-.12-.432-.36-.552-.232-.12-.604-.252-1.116-.396a10.83 10.83 0 0 1-1.212-.396 2.176 2.176 0 0 1-.816-.588c-.224-.264-.336-.612-.336-1.044 0-.352.104-.672.312-.96.208-.296.504-.528.888-.696.392-.168.84-.252 1.344-.252.752 0 1.356.192 1.812.576.464.376.712.892.744 1.548h-1.368a.974.974 0 0 0-.36-.708c-.216-.176-.508-.264-.876-.264-.36 0-.636.068-.828.204a.632.632 0 0 0-.288.54c0 .176.064.324.192.444s.284.216.468.288c.184.064.456.148.816.252.48.128.872.26 1.176.396.312.128.58.32.804.576.224.256.34.596.348 1.02 0 .376-.104.712-.312 1.008-.208.296-.504.528-.888.696-.376.168-.82.252-1.332.252Zm3.554-3.444c0-.664.136-1.252.408-1.764a3.047 3.047 0 0 1 2.712-1.62c.52 0 .972.104 1.356.312.392.2.704.452.936.756v-.96h1.38v6.612h-1.38v-.984a2.717 2.717 0 0 1-.948.78c-.4.208-.856.312-1.368.312a2.938 2.938 0 0 1-1.56-.432 3.206 3.206 0 0 1-1.128-1.224c-.272-.528-.408-1.124-.408-1.788Zm5.412.024c0-.456-.096-.852-.288-1.188a1.938 1.938 0 0 0-.732-.768 1.93 1.93 0 0 0-.984-.264c-.352 0-.68.088-.984.264-.304.168-.552.42-.744.756-.184.328-.276.72-.276 1.176 0 .456.092.856.276 1.2.192.344.44.608.744.792a1.974 1.974 0 0 0 1.968 0c.304-.176.548-.432.732-.768.192-.344.288-.744.288-1.2Zm5.733 2.088 1.872-5.388h1.452l-2.52 6.612h-1.632l-2.508-6.612h1.464l1.872 5.388Zm10.418-2.244c0 .248-.016.472-.048.672h-5.052c.04.528.236.952.588 1.272.352.32.784.48 1.296.48.736 0 1.256-.308 1.56-.924h1.476a2.998 2.998 0 0 1-1.092 1.5c-.52.384-1.168.576-1.944.576-.632 0-1.2-.14-1.704-.42a3.139 3.139 0 0 1-1.176-1.2c-.28-.52-.42-1.12-.42-1.8 0-.68.136-1.276.408-1.788.28-.52.668-.92 1.164-1.2.504-.28 1.08-.42 1.728-.42.624 0 1.18.136 1.668.408.488.272.868.656 1.14 1.152.272.488.408 1.052.408 1.692Zm-1.428-.432c-.008-.504-.188-.908-.54-1.212-.352-.304-.788-.456-1.308-.456-.472 0-.876.152-1.212.456-.336.296-.536.7-.6 1.212h3.66Zm2.319.564c0-.664.135-1.252.407-1.764a3.047 3.047 0 0 1 2.725-1.62c.431 0 .855.096 1.271.288.424.184.76.432 1.008.744v-3.192h1.38v8.88h-1.38v-.996a2.55 2.55 0 0 1-.936.792c-.391.208-.843.312-1.355.312a3.021 3.021 0 0 1-1.585-.432 3.206 3.206 0 0 1-1.127-1.224c-.273-.528-.409-1.124-.409-1.788Zm5.412.024c0-.456-.097-.852-.289-1.188a1.938 1.938 0 0 0-.732-.768 1.93 1.93 0 0 0-.984-.264c-.352 0-.68.088-.983.264-.305.168-.553.42-.745.756-.184.328-.276.72-.276 1.176 0 .456.092.856.276 1.2.192.344.44.608.745.792a1.974 1.974 0 0 0 1.967 0c.304-.176.548-.432.732-.768.192-.344.288-.744.288-1.2Z"
    />
    <Defs></Defs>
  </Svg>
);
export { Co2GreenCloud };
