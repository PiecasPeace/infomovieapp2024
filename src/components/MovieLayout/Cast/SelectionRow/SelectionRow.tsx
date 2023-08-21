import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {BORDEAUX_RED} from '../../../../constants/color/colorpalette';

export interface ISelectionRowProp {
  title: string;
  children: ReactNode;
  color?: string;
  marginLeft?: number;
}

export const SelectionRow: React.FC<ISelectionRowProp> = ({
  title,
  children,
  color = BORDEAUX_RED,
  marginLeft = 5,
}: ISelectionRowProp) => {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: marginLeft,
            color: color,
          }}>
          {title}
        </Text>
      </View>
      {children}
    </View>
  );
};
