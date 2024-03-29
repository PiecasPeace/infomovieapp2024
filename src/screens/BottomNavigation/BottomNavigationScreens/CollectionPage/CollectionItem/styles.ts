import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../../constants/color/colorpalette';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: WHITE,
    fontFamily: 'roboto',
  },
  titleView: {
    flexDirection: 'column',
    marginLeft: 30,
  },
  itemView: {
    flexDirection: 'row',
    padding: 20,
  },
});
