import React, {ReactNode} from 'react';
import {Modal} from 'react-native-paper';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';
import {Animated, StyleProp, ViewStyle} from 'react-native/types';

interface ICustomModalProps {
  dismissable: boolean;
  visible: boolean;
  overlayAccessibilityLabel: string;
  onClose: () => void;
  children: ReactNode;
  contentContainerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  style: StyleProp<ViewStyle>;
  theme?: ThemeProp | undefined;
}

export const CustomModal: React.FC<ICustomModalProps> = ({
  dismissable = true,
  children,
  overlayAccessibilityLabel,
  onClose,
  contentContainerStyle,
  visible,
  style,
  theme,
}: ICustomModalProps) => (
  <Modal
    dismissable={dismissable}
    visible={visible}
    overlayAccessibilityLabel={overlayAccessibilityLabel}
    onDismiss={onClose}
    contentContainerStyle={contentContainerStyle}
    style={style}
    theme={theme}>
    {children}
  </Modal>
);
