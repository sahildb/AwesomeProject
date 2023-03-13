import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

const CamHeader = () => {
  return (
    <Image source={require('./Assets/Images/camerapic.png')} style={styles.img} />
  )
}

export default CamHeader

const styles = StyleSheet.create({
    img: {
        width: RFValue(25),
        height: RFValue(25),
        marginHorizontal: 10,
      },
})