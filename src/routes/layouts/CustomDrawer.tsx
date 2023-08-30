import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
import {
  Avatar,
  Box,
  Divider,
  FlatList,
  HStack,
  Heading,
  Pressable,
  Row,
  Switch,
  VStack,
  useColorMode,
} from 'native-base';
import React, {useMemo} from 'react';
import {BackHandler, TouchableOpacity} from 'react-native';
import {IMAGES} from '~/assets';
import {AppIcon, IconProps} from '~/components/core';
import {PrivateScreenProps} from '../private/types';

export default function CustomDrawer() {
  const navigation = useNavigation<PrivateScreenProps>();
  // const {name} = useRoute();

  const SIDE_MENUS: {
    id: string;
    title: string;
    icon: IconProps;
    onPress: () => void;
  }[] = useMemo(
    () => [
      {
        id: '1',
        title: 'Home',
        icon: {
          AntDesignName: 'home',
        },
        onPress: () => navigation.navigate('Dashboard'),
      },
      {
        id: '22',
        icon: {
          AntDesignName: 'wallet',
        },
        title: 'Polices',
        onPress: () => navigation.navigate('Polices'),
      },
      {
        id: '2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Meetings',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: '13',
        icon: {
          FeatherName: 'log-out',
        },
        onPress: () => {},
        title: 'Logout',
      },
    ],
    [navigation],
  );
  return (
    <>
      <Box safeAreaTop>
        <FlatList
          _contentContainerStyle={{minH: 'full'}}
          ListHeaderComponent={
            <TouchableOpacity>
              <Row px="2" py="5" space={'2'} alignItems="center">
                <Avatar bg="red.900" rounded={'lg'} size="lg">
                  {'Demo'}
                </Avatar>

                <VStack space={'1.5'} w="32">
                  <Heading
                    numberOfLines={2}
                    fontSize={'xs'}
                    ellipsizeMode="tail">
                    {'Demo name'}
                  </Heading>
                </VStack>
              </Row>
              <Divider bgColor={'primary.300'} />
            </TouchableOpacity>
          }
          data={SIDE_MENUS}
          renderItem={({item}) => (
            <>
              {/* <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                  item?.onPress();
                }}>
                <Row alignItems={'center'} px="2" py="4" space="4">
                  <AppIcon
                    size={24}
                    {...item.icon}
                    color={'black'}
                    // color={colorMode === 'dark' ? 'white' : 'black'}
                  />
                  <Heading fontSize={'lg'} fontWeight="medium">
                    {item.title}
                  </Heading>
                </Row>
                <Divider bgColor={'primary.300'} />
              </TouchableOpacity> */}
              <Pressable
                roundedLeft={'lg'}
                onPress={() => item?.onPress()}
                maxW={'full'}
                _pressed={{opacity: '0.5'}}>
                <HStack
                  roundedLeft={'lg'}
                  py="4"
                  px="2"
                  // bg={isActive ? 'muted.300' : 'transparent'}
                  space={4}
                  alignItems="center">
                  <Box>
                    {/* {icon(isActive ? 'black' : 'white')} */}
                    <AppIcon size={24} {...item.icon} color={'white'} />
                  </Box>
                  <Heading
                    fontSize="sm"
                    fontWeight="600"
                    color={'white'}
                    // color={isActive ? 'black' : 'white'}
                  >
                    {item?.title}
                  </Heading>
                </HStack>
              </Pressable>
            </>
          )}
          keyExtractor={(item, _) => _.toString()}
        />
      </Box>
    </>
  );
}
