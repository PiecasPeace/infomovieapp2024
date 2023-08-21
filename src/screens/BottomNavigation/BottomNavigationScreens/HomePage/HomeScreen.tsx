import React, {Fragment, useState} from 'react';
import {View} from 'react-native';
import {HomeList} from './Flatlist/HomeList';
import {styles} from './styles';
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {requestPath} from '../../../../constants/RequestPath';
import {RootStackParamList} from '../../../../constants/Navigation/navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {WHITE} from '../../../../constants/color/colorpalette';

interface IHomeProps {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const HomeScreen: React.FC<IHomeProps> = ({navigation}: IHomeProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(requestPath.MostPopular);

  const handleDropdownChange = (item: ValueType | null) => {
    if (item && typeof item === 'string') {
      setValue(item);
    }
  };

  return (
    <View style={styles.container}>
      <Fragment>
        <DropDownPicker
          open={open}
          value={value}
          setOpen={setOpen}
          setValue={setValue}
          onSelectItem={() => setOpen(true)}
          // setItems={() => handleDropdownChange(value)}
          placeholder="Choose List"
          style={styles.dropDownPicker}
          containerStyle={styles.dropContainer}
          onChangeValue={handleDropdownChange}
          listItemContainerStyle={styles.dropItem}
          labelStyle={styles.dropLabel}
          listItemLabelStyle={styles.dropSelectedLabel}
          dropDownContainerStyle={styles.dropListStyle}
          items={[
            {
              label: 'Most Popular',
              value: requestPath.MostPopular,
              icon: () => (
                <MaterialCommunityIcons name="podium" size={25} color={WHITE} />
              ),
            },
            {
              label: 'Top Rated',
              value: requestPath.TopRated,
              icon: () => (
                <MaterialCommunityIcons
                  name="chart-bar"
                  size={25}
                  color={WHITE}
                />
              ),
            },
            {
              label: 'Trending',
              value: requestPath.Trending,
              icon: () => (
                <MaterialCommunityIcons
                  name="trending-up"
                  size={25}
                  color={WHITE}
                />
              ),
            },
          ]}
        />
        <HomeList fetchUrl={value} navigation={navigation} />
      </Fragment>
    </View>
  );
};

export default HomeScreen;
