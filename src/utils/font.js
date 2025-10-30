import { Platform } from "react-native";

const IOS = Platform.OS === "ios";
export const fontFamily = {
  regular: IOS ? 'Helvetica' : 'Helvetica',
  light: IOS ? 'Helvetica-Light' : 'HelveticaLight',
  bold: IOS ? 'Helvetica-Bold' : 'HelveticaBold',
};