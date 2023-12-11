/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Paragraph, TamaguiProvider, XStack} from 'tamagui';
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
          <XStack f={1} jc="center" ai="center" backgroundColor={'pink'}>
            <Paragraph color="black" jc="center" fontSize={50} lineHeight={80}>
              Black
            </Paragraph>
          </XStack>
        </TamaguiProvider>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
