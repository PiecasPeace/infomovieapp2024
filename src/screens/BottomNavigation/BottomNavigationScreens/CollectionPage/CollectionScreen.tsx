import React from 'react';
import {View} from 'react-native';
import {CustomButton} from '../../../../components/blueprints/CustomButton/CustomButton';
import {CollectionProps} from '../../../../constants/Navigation/navigation';
import {CollectionItem} from './CollectionItem/CollectionItem';
import {styles} from './styles';
import {WHITE, PINK} from '../../../../constants/color/colorpalette';

export const CollectionScreen: React.FC<CollectionProps> = ({
  navigation,
}: CollectionProps) => {
  return (
    <View style={styles.collectionContainer}>
      <View style={styles.collectionItems}>
        <CollectionItem
          iconName={'movie-open-outline'}
          titleName={'My Movies'}
          onPress={() => navigation.navigate('MyMoviesCollection')}
          color={WHITE}
          size={45}
        />
        <CollectionItem
          iconName={'folder-heart-outline'}
          titleName={'Favorites'}
          onPress={() => navigation.navigate('FavoriteCollection')}
          color={WHITE}
          size={45}
        />
      </View>
      <View>
        <CustomButton
          Text="Go back to Home"
          buttonColor={PINK}
          mode="outlined"
          style={{}}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};
