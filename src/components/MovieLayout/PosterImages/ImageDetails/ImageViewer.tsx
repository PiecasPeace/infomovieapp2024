import React, {useState} from 'react';
import {Modal, Platform, ToastAndroid, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {IImageModalProps} from './IImageProps';
import RNFetchBlob, {FetchBlobResponse} from 'rn-fetch-blob';
import {CustomGetPermissionAndroid} from '../../../blueprints/CustomHandleDownload/CustomGetPermissionAndroid';
import {CustomButton} from '../../../blueprints/CustomButton/CustomButton';
import {Spinner} from '../../../Spinner/Spinner';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { BLACK, WHITE } from '../../../../constants/color/colorpalette';

const ImagesModal: React.FC<IImageModalProps> = ({
  showImage = false,
  images,
  onClose,
}: IImageModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (currentIndex: number) => {
    if (Platform.OS === 'android') {
      const granted = await CustomGetPermissionAndroid();
      if (!granted) {
        return;
      }
    }
    setLoading(true);
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
      path: dirs.DCIMDir + '/path-to-file.png',
    })
      .fetch('GET', images[currentIndex].url, {})
      .then((res: FetchBlobResponse) => {
        setLoading(false);
        CameraRoll.save(res.data)
          .then(() => {
            ToastAndroid.showWithGravity(
              'Your file has been downloaded to your DCIM folder!',
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          })
          .catch(err => {
            ToastAndroid.showWithGravity(
              'Error' + err,
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM,
            );
          })
          .finally(() => setLoading(false));
      })
      .catch(err => {
        setLoading(false);
        ToastAndroid.showWithGravity(
          'Error beim catching ganz unten' + err,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
  };

  return (
    <Modal visible={showImage} transparent onRequestClose={onClose}>
      <ImageViewer
        imageUrls={images}
        enableSwipeDown
        enableImageZoom
        enablePreload
        saveToLocalByLongPress={true}
        pageAnimateTime={200}
        flipThreshold={10}
        swipeDownThreshold={25}
        renderFooter={(currentIndex: number) => (
          <View>
            <CustomButton
              onPress={() => handleDownload(currentIndex)}
              buttonColor={BLACK}
              mode={'contained'}
              Text={'Save to Gallery'}
              icon={'download'}
              style={{flex: 1, minWidth: '100%'}}
            />
          </View>
        )}
        loadingRender={() => <Spinner color={WHITE} />}
        onCancel={onClose}
      />
    </Modal>
  );
};

export default ImagesModal;
