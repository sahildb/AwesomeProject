import {StyleSheet, Text, View,Button} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
const TabBDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Tab B Details here!</Text>
      <Button
        onPress={() => navigation.navigate('TabB Home')}
        title="Go to Back"
      />
    </View>
  );
};

export default TabBDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName:{
    fontSize:RFValue(18),
    marginBottom:RFValue(10)
  }
});
