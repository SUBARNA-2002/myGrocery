import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export const responsive = {
  size: (size) => scale(size),             // General scaling
  width: (size) => scale(size),
  height: (size) => verticalScale(size),
  font: (size, factor = 0.5) => moderateScale(size, factor),
  padding: (size) => scale(size),
  margin: (size) => scale(size),
};