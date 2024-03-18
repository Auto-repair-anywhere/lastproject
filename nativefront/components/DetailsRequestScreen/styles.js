import { StyleSheet } from 'react-native';
import { fontValue, heightPercentageToDP, widthPercentageToDP } from '../utils/global_styles';
import { COLORS } from '../utils/app_config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapViewContainer: {
    height: 350,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: widthPercentageToDP(24),
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: fontValue(16),
    marginTop:heightPercentageToDP(12)
  },
  subTitle: {
    color: COLORS.gray,
    fontWeight: 'bold',
    fontSize: fontValue(14),
  },
  description: {
    color: COLORS.gray,
    fontWeight: 'bold',
    fontSize: fontValue(14),
    marginVertical: heightPercentageToDP(12),
  },
});
