import { StyleSheet } from "react-native";
import { fontValue, heightPercentageToDP, widthPercentageToDP } from "../utils/global_styles";
import { COLORS } from "../utils/app_config";

export const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal:widthPercentageToDP(24)
    },
    orContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: heightPercentageToDP(24),
      marginHorizontal:widthPercentageToDP(68)
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: 'white',
      marginHorizontal: 10,
    },
    orText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    subTitle:{
      color:COLORS.white,
      textAlign:'center',
      fontWeight: 'bold',
      fontSize:fontValue(18),
      marginBottom:heightPercentageToDP(42)
    }
  });