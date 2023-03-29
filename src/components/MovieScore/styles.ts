import {StyleSheet} from 'react-native';
import { WHITE, LIGHT_RED, LIGHT_YELLOW, LIGHT_GREEN, DARK_GRAY, LIME } from '../../constants/color/colorpalette';
import { fontSizeResponsive } from '../../constants/utils/dimensions';

export const styles = StyleSheet.create({
  score: {
    minWidth: '25%',
    padding:3,
    borderRadius: 3,
  },
  textPercent: {
    fontSize: fontSizeResponsive(2.1),
    fontWeight: '500',
    color: WHITE,
    textAlign: 'center',
  },
  low: {
    backgroundColor: LIGHT_RED,
  },
  mid: {
    backgroundColor: LIGHT_YELLOW,
  },
  high: {
    backgroundColor: LIGHT_GREEN,
  },
  zero: {
    backgroundColor:DARK_GRAY,
  },
  lime:{
    backgroundColor:LIME,
  }
});
