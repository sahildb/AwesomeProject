import {StyleSheet,Image, Text, View} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const LogoinHeader = () => {
  return (
    <Image
      source={require('./Assets/Images/profile.png')}
      style={{
        width: RFValue(30),
        height: RFValue(30),
        borderRadius: 40 / 2,
        marginHorizontal: 10,
      }}
    />
  );
};

export default LogoinHeader;

const styles = StyleSheet.create({});
