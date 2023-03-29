import React, {ReactNode} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

export interface ICustomTouchableOpacityProps {
  activeOpacity: 0.5 | 1;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  children: ReactNode;
}

export const CustomTouchableOpacity: React.FC<ICustomTouchableOpacityProps> = ({
  activeOpacity,
  style,
  onPress,
  children,
}: ICustomTouchableOpacityProps) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    style={style}
    onPress={onPress}>
    {children}
  </TouchableOpacity>
);

