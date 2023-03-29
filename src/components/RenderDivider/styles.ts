import {StyleSheet} from 'react-native';
import { BLACK } from '../../constants/color/colorpalette';
import { fontSizeResponsive } from '../../constants/utils/dimensions';

export const styles = StyleSheet.create({
  trace: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: fontSizeResponsive(2.1),
    color: BLACK,
  },
});
