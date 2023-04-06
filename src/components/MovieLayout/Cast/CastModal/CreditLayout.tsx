import {View, Image} from 'react-native';
import {getImageApi} from '../../../../constants/utils/Image';
import {CustomTouchableOpacity} from '../../../blueprints/CustomTouchableOpacity/CustomTouchableOpacity';
import {IPersonWithMovieCredits} from '../../MovieDetail/Interfaces/ICastWithCredits';

interface ICreditLayout {
  openDetails: (id: number) => void;
  item: IPersonWithMovieCredits;
}
export const CreditLayout: React.FC<ICreditLayout> = ({
  item,
  openDetails,
}: ICreditLayout) => {
  return (
    <CustomTouchableOpacity
      onPress={() => openDetails(item.id)}
      activeOpacity={0.5}
      key={item.id}>
      <View
        style={{
          paddingRight: 10,
          width: '50%',
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Image
          source={getImageApi(item.poster_path)}
          style={{
            width: 130,
            height: 200,
            borderRadius: 5,
          }}
          resizeMode="cover"
        />
      </View>
    </CustomTouchableOpacity>
  );
};
