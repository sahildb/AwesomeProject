import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const TabBDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.textName}>Welcome to TabB page!</Text>
    <Button
      onPress={() => navigation.navigate('TabB Details')}
      title="Go to Tab B Details"
    />
  </View>
  )
}

export default TabBDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  textName:{
  fontSize:RFValue(18),
  
  margin:RFValue(10),
  fontFamily:"Cocomat"
  }
});
