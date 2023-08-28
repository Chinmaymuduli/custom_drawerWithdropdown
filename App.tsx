import React from 'react';
import Router from './src/Router';
// import {
//   config,
//   GluestackUIProvider,
//   StyledProvider,
//   Text,
// } from '@gluestack-ui/themed';
import CustomTheme from '~/styles';
import {NativeBaseProvider, Text} from 'native-base';
import {AppContextProvider} from '~/contexts';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    // <GluestackUIProvider
    //   config={config.theme}

    // >
    //   <Text>Hello error</Text>
    // </GluestackUIProvider>

    <NavigationContainer>
      <NativeBaseProvider
        theme={CustomTheme} // }}
        config={{
          dependencies: {
            'linear-gradient': require('react-native-linear-gradient').default,
          },
        }}>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
