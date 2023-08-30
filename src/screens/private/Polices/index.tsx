import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerSceneWrapper, PrivateContainer} from '~/components/container';
import {IMAGES} from '~/assets';

const Policy = () => {
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
        image={IMAGES.LOGO}>
        <Text>Hello Polices</Text>
      </PrivateContainer>
    </DrawerSceneWrapper>
  );
};

export default Policy;

const styles = StyleSheet.create({});
