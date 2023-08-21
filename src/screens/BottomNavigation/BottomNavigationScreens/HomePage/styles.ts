import {StyleSheet} from 'react-native';
import {
  LIGHT_PURPLE,
  WHITE,
  DARK_PURPLE,
  PINK,
} from '../../../../constants/color/colorpalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_PURPLE,
    justifyContent: 'flex-start',
  },
  trendingText: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  //DROPDOWN
  dropDownPicker: {
    backgroundColor: DARK_PURPLE,
    zIndex: 2,
  },
  dropContainer: {
    //Changes the height of the DropdownBox
    height: 40,
  },
  dropItem: {
    //Changes text Content (Most Popular, Trending...)
    justifyContent: 'center',
  },
  dropLabel: {
    fontSize: 17,
    textAlign: 'center',
    color: WHITE,
    marginLeft: 10,
    fontFamily: 'roboto',
  },
  dropSelectedLabel: {
    color: PINK,
  },
  dropListStyle: {
    backgroundColor: '#26232b',
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
  },
});
