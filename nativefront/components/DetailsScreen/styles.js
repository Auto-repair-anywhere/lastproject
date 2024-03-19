import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "../utils/global_styles";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    map:{
      flex:1
    },
    footer:{
      position:'absolute',
      bottom: heightPercentageToDP(24),
      end:0,
      start:0,
      paddingHorizontal:widthPercentageToDP(24)
    }
  });