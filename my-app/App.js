import React from 'react';
import Game from './screens/Game'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Store from './store/index'
import Home from './screens/Home';
import Finish from './screens/Finish';

const Stack = createStackNavigator()
export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
            <Stack.Screen name="Finish" component={Finish} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

