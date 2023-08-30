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
  Text,
  VStack,
  useColorMode,
} from 'native-base';
import React, {useMemo, useState} from 'react';
import {
  BackHandler,
  LayoutAnimation,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  UIManager,
} from 'react-native';
import {IMAGES} from '~/assets';
import {AppIcon, IconProps} from '~/components/core';
import {PrivateScreenProps} from '../private/types';
import {COLORS} from '~/styles';

export default function CustomDrawer() {
  const navigation = useNavigation<PrivateScreenProps>();
  // const {name} = useRoute();
  const [menuIndex, setMenuIndex] = useState(-1);
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const SIDE_MENUS: {
    id: string;
    title: string;
    icon: IconProps;
    menuList?: any[];
    onPress: () => void;
  }[] = useMemo(
    () => [
      {
        id: '1',
        title: 'Dashboard',
        icon: {
          MaterialIconsName: 'dashboard',
        },
        onPress: () => navigation.navigate('Dashboard'),
      },
      {
        id: '22',
        icon: {
          AntDesignName: 'wallet',
        },
        title: 'HR',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Polices'),
      },

      {
        id: 'b2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Document',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'c2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Chat',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'm2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Meetings',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'p2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Polices',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'm2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Marketing',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'R2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Research',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'T2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Training',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'm752',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Mail',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'e20',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Events',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'cd58',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Complaints & Due Date',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'rt565',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Reporting',
        menuList: [{title: 'Eat'}, {title: 'Code'}, {title: 'Sleep'}],
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'cf255',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Case & Fixed',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'ne12',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'News',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'bi65',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Billing',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'te632',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Tenders',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'sv5',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Services',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 'JT541',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Job Track',
        onPress: () => navigation.navigate('Meetings'),
      },
      {
        id: 's2',
        icon: {
          AntDesignName: 'bells',
        },
        title: 'Settings',
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
          showsVerticalScrollIndicator={false}
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
          renderItem={({item, index}) => (
            <>
              <Pressable
                roundedLeft={'lg'}
                // onPress={() => item?.onPress()}
                onPress={
                  item?.menuList
                    ? () => {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.create(
                            200,
                            'easeInEaseOut',
                            'opacity',
                          ),
                        );
                        setMenuIndex(menuIndex === index ? -1 : index);
                      }
                    : () => item?.onPress()
                }
                maxW={'full'}
                _pressed={{opacity: '0.5'}}>
                <Row alignItems="center" justifyContent={'space-between'}>
                  <HStack
                    roundedLeft={'lg'}
                    py="4"
                    px="2"
                    space={4}
                    alignItems="center">
                    <Box>
                      <AppIcon size={24} {...item.icon} color={'white'} />
                    </Box>
                    <Heading fontSize="sm" fontWeight="600" color={'white'}>
                      {item?.title}
                    </Heading>
                  </HStack>
                  {item?.menuList ? (
                    menuIndex === index ? (
                      <AppIcon
                        size={24}
                        EntypoName="chevron-down"
                        color={'white'}
                      />
                    ) : (
                      <AppIcon
                        size={24}
                        EntypoName="chevron-right"
                        color={'white'}
                      />
                    )
                  ) : (
                    <></>
                  )}
                </Row>
              </Pressable>
              {menuIndex === index && (
                <Box borderRadius={5} bgColor={COLORS.secondary} mx={2}>
                  {item?.menuList?.map((subMenu, index) => (
                    <TouchableNativeFeedback key={index}>
                      <Box py={2} px={2}>
                        <Text>{subMenu.title}</Text>
                      </Box>
                    </TouchableNativeFeedback>
                  ))}
                </Box>
              )}
            </>
          )}
          keyExtractor={(item, _) => _.toString()}
        />
      </Box>
    </>
  );
}
