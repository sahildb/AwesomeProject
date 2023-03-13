import { StyleSheet, Image} from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';


const LocationHeader = () => {
    return (
        <Image source={require('./Assets/Images/location.png')} style={styles.img} />
      )
}

export default LocationHeader

const styles = StyleSheet.create({
    img: {
        width: RFValue(20),
        height: RFValue(20),
        marginHorizontal: 10,
      },
})