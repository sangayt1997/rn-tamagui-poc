/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {Button, TamaguiProvider} from 'tamagui';
import config from './tamagui.config';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="always"
        alwaysBounceVertical={false}>
        <TamaguiProvider config={config}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Text>Testing with Tamagui</Text>
          <Button>Hello world</Button>
        </TamaguiProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
