import {Text} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {PrivateScreenProps} from '~/routes/private/types';
import {DrawerSceneWrapper, PrivateContainer} from '~/components/container';
import {IMAGES} from '~/assets';

const Dashboard = () => {
  const navigation = useNavigation<PrivateScreenProps>();
  return (
    <DrawerSceneWrapper>
      <PrivateContainer
        icons={[
          {
            icon: {EntypoName: 'menu'},
            hasDrawer: true,
            side: 'LEFT',
          },
          {
            icon: {IoniconsName: 'notifications'},
            onPress: () => {},
            side: 'RIGHT',
          },
        ]}
        image={IMAGES.LOGO}
        iconSize={23}>
        <Text>Hello PrivateContainer</Text>
      </PrivateContainer>
    </DrawerSceneWrapper>
  );
};

export default Dashboard;
