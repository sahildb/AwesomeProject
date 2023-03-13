import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeMusic from './HomeMusic';
import Music from './Music';
import Colors from './Colors';

const Stack = createNativeStackNavigator();
const AudioPlay = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeMusic"
          component={HomeMusic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{headerShown: true,
            headerBackTitleVisible: false,
            headerTintColor: Colors.GRAY,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AudioPlay;

const styles = StyleSheet.create({});
