import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/app_config";
import { fontValue, heightPercentageToDP, widthPercentageToDP } from "../../utils/global_styles";

export const styles = StyleSheet.create({
    button: {
      backgroundColor: COLORS.blue,
      borderRadius: heightPercentageToDP(15),
      paddingVertical: heightPercentageToDP(12),
      alignItems: 'center',
      marginHorizontal:widthPercentageToDP(6),
      flex:1
    },
    buttonText: {
      color: 'white',
      fontSize: fontValue(16),
      fontWeight: 'bold',
    },
    icon:{
      width:24,
      height:24,
      marginHorizontal:6
    }
  });