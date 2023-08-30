import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Box, Image, Pressable, Row, Text} from 'native-base';
import React from 'react';
import {AppIcon} from '../core';
import {ImageSourcePropType} from 'react-native';
import {COLORS} from '~/styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
type Props = {
  title?: string;
  color?: string;
  image?: ImageSourcePropType;
  iconSize?: number;
  icons?: {
    icon?: any;
    onPress?: () => void;
    hasDrawer?: boolean;
    side: 'LEFT' | 'RIGHT';
  }[];
} & React.ComponentProps<typeof Box>;
const PrivateContainer = ({
  children,
  color,
  title,
  icons,
  image,
  iconSize,
  ..._box
}: Props) => {
  const {canGoBack, goBack, dispatch} = useNavigation();
  const leftIcon = icons?.find(_ => _.side === 'LEFT');
  const rightIcons = icons?.filter(_ => _.side === 'RIGHT');
  return (
    <Box safeAreaTop flex={1} bg={'white'} {..._box}>
      <Box shadow={3} bgColor={'white'}>
        <Row
          px={3}
          bg={color}
          alignItems={'center'}
          justifyContent={'space-between'}
          py={3}>
          <Row alignItems={'center'} space={3}>
            {leftIcon?.hasDrawer ? (
              <Pressable onPress={() => dispatch(DrawerActions.openDrawer())}>
                <AppIcon size={28} color={'black'} {...leftIcon?.icon} />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  if (leftIcon?.onPress) return leftIcon.onPress();
                  if (canGoBack()) return goBack();
                }}
                h={'9'}
                w={'9'}
                shadow={3}
                borderRadius={12}
                bgColor={'white'}
                alignItems={'center'}
                justifyContent={'center'}>
                <FontAwesome6
                  name="chevron-left"
                  size={24}
                  color={COLORS.secondary}
                />
              </Pressable>
            )}
            {image ? (
              <Box>
                <Image
                  source={image}
                  alt="image"
                  style={{height: 30, width: 100}}
                  resizeMode="contain"
                />
              </Box>
            ) : (
              <Text fontSize="lg" fontWeight="bold">
                {title}
              </Text>
            )}
          </Row>
          <Row alignItems={'center'}>
            {rightIcons?.map((_, i) => (
              <React.Fragment key={i}>
                <Pressable
                  onPress={() => {
                    if (_?.onPress) return _.onPress();
                  }}>
                  <AppIcon size={25} color={COLORS.primary} {..._?.icon} />
                </Pressable>
              </React.Fragment>
            ))}
          </Row>
        </Row>
      </Box>
      {children}
    </Box>
  );
};

export default PrivateContainer;
