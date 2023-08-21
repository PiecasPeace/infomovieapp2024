import React from 'react';
import { IMovieVideoProps } from './IMovieVideoProps';
import { Spinner } from '../../../Spinner/Spinner';
import { CustomSafeAreaView } from '../../../blueprints/CustomSafeAreaView/CustomSafeAreaView';
import WebView from 'react-native-webview';

const Loading = () => <Spinner />;

export const MovieVideo: React.FC<IMovieVideoProps> = ({
  route
}: IMovieVideoProps) => {
  const {key} = route.params;
  return (
    <CustomSafeAreaView>
      <WebView
        source={{
          uri: `https://www.youtube.com/embed/${key}?start=0`,
        }}
        startInLoadingState
        renderLoading={Loading}
      />
    </CustomSafeAreaView>
  );
};

export default MovieVideo;
