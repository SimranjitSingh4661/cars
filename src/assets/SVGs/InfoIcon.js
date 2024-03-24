import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { verticalScale, scale } from "@utils/scaling";

const SVGComponent = (props) => (
  <Svg
    width={scale(21)}
    height={verticalScale(21)}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5 6.433v.892m0 2.23v4.012m0 5.35a8.917 8.917 0 1 0 0-17.834 8.917 8.917 0 0 0 0 17.834"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
