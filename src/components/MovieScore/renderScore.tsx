import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const voteAverageColors = {
  zero: 'zero',
  low: 'low',
  mid: 'mid',
  high: 'high',
  lime: 'lime',
} as const;
type color = (typeof voteAverageColors)[keyof typeof voteAverageColors];

const getColorByVoteAverage = (voteAverage: number): color => {
  switch (true) {
    case voteAverage === 10:
      return 'lime';
    case voteAverage === 0:
      return 'zero';
    case voteAverage < 5:
      return 'low';
    case voteAverage < 7:
      return 'mid';
    default:
      return 'high';
  }
};

export const renderScore = (voteAverage: number): JSX.Element => {
  const color = getColorByVoteAverage(voteAverage);

  return (
    <View style={[styles.score, styles[color]]}>
      <Text style={styles.textPercent}>{voteAverage}</Text>
    </View>
  );
};
