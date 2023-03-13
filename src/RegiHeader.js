import {StyleSheet,Image, Text, View} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const RegiHeader = () => {
  return (
    <Image source={require('./Assets/Images/edit.png')} style={styles.img} />
  );
};

export default RegiHeader;

const styles = StyleSheet.create({
  img: {
    width: RFValue(30),
    height: RFValue(30),
    marginHorizontal: 10,
  },
});
