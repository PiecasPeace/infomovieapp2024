import {StyleSheet} from 'react-native';
import {fontSizeResponsive} from '../../constants/utils/dimensions';
import {WHITE, BLUE, LIGHT_GRAY} from '../../constants/color/colorpalette';

export const styles = StyleSheet.create({
  containerError: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
    width: '100%',
  },
  errorInfo: {
    fontSize: fontSizeResponsive(2.6),
    color: BLUE,
    textAlign: 'center',
    padding: 25,
  },
  loadingButton: {
    padding: 10,
    width: '50%',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: LIGHT_GRAY,
  },
  loadingText: {
    fontSize: fontSizeResponsive(2.1),
    color: BLUE,
    textAlign: 'center',
  },
});
