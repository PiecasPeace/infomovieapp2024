import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CustomButton} from '../../../../../components/blueprints/CustomButton/CustomButton';
import {styles} from './styles';
import {Spinner} from '../../../../../components/Spinner/Spinner';
import {WHITE, PINK} from '../../../../../constants/color/colorpalette';

export const MyMoviesPageScreen: React.FC = ({navigation}: any) => {
  //TODO: what is that supposed to be here?
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.myMoviesContainer}>
      {loading ? (
        <Spinner />
      ) : (
        <View style={styles.collectionItems}>
          <Text style={{color: WHITE}}>Here in myMoviesPageScreen</Text>
          <CustomButton
            Text="Go back to Home"
            buttonColor={PINK}
            mode="outlined"
            style={{}}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <View style={styles.collectionItems}></View>
    </View>
  );
};
