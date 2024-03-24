import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { verticalScale, scale } from "@utils/scaling";

const SVGComponent = (props) => (
  <Svg
    width={scale(17)}
    height={verticalScale(12)}
    viewBox="0 0 17 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.475 11.058 1.417 6 6.475.942M15.583 6H1.558"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
