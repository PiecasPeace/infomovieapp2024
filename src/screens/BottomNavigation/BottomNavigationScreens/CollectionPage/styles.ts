import {StyleSheet} from 'react-native';
import {DARK_PURPLE} from '../../../../constants/color/colorpalette';

export const styles = StyleSheet.create({
  collectionContainer: {
    flex: 1,
    backgroundColor: DARK_PURPLE,
  },
  favoriteButton: {
    // height:60
  },
  moviesIMarkedAsBought: {
    backgroundColor: DARK_PURPLE,
  },
  collectionItems: {
    flex: 1,
    flexDirection: 'column',
  },
});
