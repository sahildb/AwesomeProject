import {StyleSheet,Image, Text, View} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const ListHeader = () => {
  return (
    <Image source={require('./Assets/Images/list.png')} style={styles.img} />
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  img: {
    width: RFValue(20),
    height: RFValue(20),
    marginHorizontal: 10,
  },
});


