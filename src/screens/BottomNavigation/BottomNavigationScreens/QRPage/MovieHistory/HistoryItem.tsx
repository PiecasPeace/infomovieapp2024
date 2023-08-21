import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {CustomButton} from '../../../../../components/blueprints/CustomButton/CustomButton';

import {styles} from './styles';
import {HistoryProps, HistoryItemProps} from './IMovieHistoryInterface';
import { BORDEAUX_RED, WHITE } from '../../../../../constants/color/colorpalette';

const HistoryItem = ({history, index, onPress}: HistoryItemProps) => {
  const MovieTitleIndex = () => {
    if (history[index] !== undefined) {
        return `${history[index]}`;
    }
  };
  return (
    <View>
      <Text style={styles.movieText}>{MovieTitleIndex()}</Text>
      <View style={styles.buttonView}>
        <CustomButton
          onPress={() => onPress(index)}
          contentStyle={{backgroundColor: BORDEAUX_RED}}
          mode={'contained'}
          textColor={WHITE}
          Text="Search"
          style={styles.buttonLabel}
          labelStyle={styles.buttonLabel}
          key={`${history[index]}`}
        />
      </View>
    </View>
  );
};
export const ShowHistory = ({history, onPress}: HistoryProps) => {
  return (
    <Fragment>
      {history.map((v, index: number) => {
        return (
          <HistoryItem
            index={index}
            history={history}
            onPress={() => onPress(index)}
            key={index}
          />
        );
      })}
    </Fragment>
  );
};
