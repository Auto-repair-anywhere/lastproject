import { StyleSheet } from "react-native";
import { fontValue, heightPercentageToDP } from "../../utils/global_styles";
import { COLORS } from "../../utils/app_config";

export const styles = StyleSheet.create({
    button: {
      backgroundColor: COLORS.blue,
      borderRadius: heightPercentageToDP(15),
      paddingVertical: heightPercentageToDP(12),
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: fontValue(16),
      fontWeight: 'bold',
    },
  });