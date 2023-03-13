import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabADetailsScreen from './TabADetailsScreen';
import TabADetails from './TabADetails';
import LogoinHeader from './LogoinHeader';
import RegisterPage from './RegisterPage';
import DataFetch from './DataFetch';
import {RFValue} from 'react-native-responsive-fontsize';
import HomeHeadr from './HomeHeadr';
import ListHeader from './ListHeader';
import RegiHeader from './RegiHeader';
import Colors from './Colors';
import CameraPic from './CameraPic';
import CamHeader from './CamHeader';
import VideoPlay from './VideoPlay';
import GetCurrentLocation from './GetCurrentLocation';
import LocationHeader from './LocationHeader';
import VideoHeader from './VideoHeader';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: RFValue(20),
        },
      }}>
      <Stack.Screen
        name="Login Page"
        component={TabADetailsScreen}
        options={{
          headerTitle: 'Login Page',
          headerLeft: props => <LogoinHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="Home Page"
        component={TabADetails}
        options={{
          headerTitle: 'Home Page',
          headerRight: props => <HomeHeadr {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: Colors.YANKEES_BLUE,
        }}
      />
      <Stack.Screen
        name="RegisterPage"
        component={RegisterPage}
        options={{
          headerTitle: 'Register Page',
          headerRight: props => <RegiHeader {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: Colors.YANKEES_BLUE,
        }}
      />
      <Stack.Screen
        name="DataList"
        component={DataFetch}
        options={{
          headerTitle: 'Data List',
          headerRight: props => <ListHeader {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: Colors.YANKEES_BLUE,
        }}
      />
      <Stack.Screen
        name="OpenCamera"
        component={CameraPic}
        options={{
          headerTitle: 'Camera',
          headerRight: props => <CamHeader {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: Colors.YANKEES_BLUE,
        }}
      />
       <Stack.Screen
        name="VideoPlay"
        component={VideoPlay}
        options={{
          headerTitle: 'Video',
          headerRight: props => <VideoHeader {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: Colors.YANKEES_BLUE,
        }}
      />
      <Stack.Screen
        name="GetLocation"
        component={GetCurrentLocation}
        options={{
          headerTitle: 'Current Location',
          headerRight: props => <LocationHeader {...props} />,
          headerBackTitleVisible: false,
          headerTintColor: Colors.YANKEES_BLUE,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
