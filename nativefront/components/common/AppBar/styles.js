import { StyleSheet } from "react-native";
import { fontValue, heightPercentageToDP, widthPercentageToDP } from "../../utils/global_styles";
import { COLORS } from "../../utils/app_config";

export const styles = StyleSheet.create({
    appBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: heightPercentageToDP(90),
      paddingTop:heightPercentageToDP(20),
      backgroundColor: COLORS.white,
      paddingHorizontal:widthPercentageToDP(24)
    },
    iconContainer: {
      width: 36,
      height: 36,
    },
    title: {
      fontSize: fontValue(18),
      fontWeight: 'bold',
    },
    circleImage: {
      width: widthPercentageToDP(40),
      height: widthPercentageToDP(40),
      borderRadius: widthPercentageToDP(40) / 2,
    },

  });