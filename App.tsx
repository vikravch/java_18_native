import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./general/redux/store";
import React from "react";
import HomePage from "./feature/cocktail/presentation/home_page/HomePage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryPage from "./feature/cocktail/presentation/category_page/CategoryPage";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
      <NavigationContainer>
      <Provider store={store}>
          <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomePage}
                  options={{title: 'Welcome'}}
              />
              <Stack.Screen name="Categories"
                            component={CategoryPage} />
          </Stack.Navigator>
        {/*<HomePage/>*/}
      </Provider>
      </NavigationContainer>
  );
}


