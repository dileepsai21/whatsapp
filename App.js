
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect, useCallback } from 'react';
import * as SplshScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatList from './screens/ChatList';
import ChatSettings from './screens/ChatSettings';

SplshScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {

  const [isAppLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "black": require("./assets/fonts/Roboto-Black.ttf"),
          "blackItalic": require('./assets/fonts/Roboto-BlackItalic.ttf'),
          "bold": require('./assets/fonts/Roboto-bold.ttf'),
        });
      } catch(error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (isAppLoaded) {
      await SplshScreen.hideAsync();
    }
  }, [isAppLoaded]);

  if (!isAppLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
    style = {styles.container}
    onLayout = {onLayout}>
        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={ChatList} />
            <Stack.Screen name="ChatSettings" component={ChatSettings} />
          </Stack.Navigator>

        </NavigationContainer>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'black'
  }
});
