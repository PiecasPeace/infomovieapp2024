import {View, Text} from 'react-native';
import {BLUE} from '../color/colorpalette';
import {fontSizeResponsive} from './dimensions';

export const renderEmptyList = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontSizeResponsive(2.1),
          color: BLUE,
          textAlign: 'justify',
        }}>
        No Information
      </Text>
    </View>
  );
};
