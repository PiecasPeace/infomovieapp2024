import React, {ReactNode} from 'react';
import {SafeAreaView, StatusBar, StyleProp, ViewStyle} from 'react-native';

interface ICustomSafeAreaViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const CustomSafeAreaView: React.FC<ICustomSafeAreaViewProps> = ({
  children,
  style,
}: ICustomSafeAreaViewProps) => (
  <SafeAreaView style={style}>
    <StatusBar barStyle="dark-content" />
    {children}
  </SafeAreaView>
);
