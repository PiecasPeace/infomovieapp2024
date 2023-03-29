import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import React, {ReactNode} from 'react';

export interface ICustomButtonProps {
  style?: object;
  mode: 'text' | 'outlined' | 'contained' | undefined;
  Text?: ReactNode;
  onPress?: () => void;
  icon?: string;
  dark?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  buttonColor?: string;
  textColor?: string;
}

export const CustomButton: React.FC<ICustomButtonProps> = ({
  style,
  mode,
  textColor,
  buttonColor,
  onPress,
  Text,
  icon,
  dark,
  contentStyle,
  labelStyle,
}: ICustomButtonProps) => {
  return (
    <Button
      contentStyle={contentStyle}
      labelStyle={labelStyle}
      dark={dark}
      style={style}
      mode={mode}
      textColor={textColor}
      onPress={onPress}
      buttonColor={buttonColor}
      icon={icon}>
      {Text}
    </Button>
  );
};
