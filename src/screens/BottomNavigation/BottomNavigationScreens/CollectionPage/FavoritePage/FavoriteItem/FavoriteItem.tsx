import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import {renderDivider} from '../../../../../../components/RenderDivider/RenderDivider';
import {convertToYear} from '../../../../../../constants/convert/convertToDates';
import {ItmdbItem} from '../../../../../../constants/Interfaces/IMovieInterface';
import {getLanguage} from '../../../../../../constants/Language/getLanguageFunction';
import {getImageApi} from '../../../../../../constants/utils/image';
import {styles} from './styles';

export interface IFavoriteItem {
  openDetails: (id: number) => void;
  item: ItmdbItem;
}

const FavoriteItem = ({item, openDetails}: IFavoriteItem) => {
  return (
    <TouchableHighlight
      key={item.id}
      style={styles.swipeContainer}
      onPress={() => openDetails(item.id)}>
      <View style={styles.container}>
        <Image
          source={getImageApi(item.backdrop_path)}
          style={styles.BackDropPhoto}
          resizeMode="cover"
        />
        <View style={styles.subContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title !== undefined ? item.title : item.name}
          </Text>
          <View style={[styles.textRow, styles.containerSubTitles]}>
            <Text style={styles.year}>{convertToYear(item.release_date)}</Text>
            {renderDivider(item.release_date, item.original_language)}
            <Text numberOfLines={1} style={styles.language}>
              {getLanguage(item.original_language)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default FavoriteItem;
