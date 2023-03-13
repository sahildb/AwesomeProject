import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
import GetLocation from 'react-native-get-location';

const GetCurrentLocation = () => {
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setCurrentLongitude(location.longitude);
        setCurrentLatitude(location.latitude);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>GetCurrentLocation</Text>
        <Text style={styles.textlat}>lat : {currentLatitude}</Text>
        <Text style={styles.textlng}>lng : {currentLongitude}</Text>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={() => getLocation()}>
            <Text style={styles.btnText}>Get Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetCurrentLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.YANKEES_BLUE,
  },
  text: {
    fontSize: RFValue(18),
    color:Colors.White,
    marginVertical:RFValue(10)
  },
  textlat: {
    fontSize: RFValue(18),
    color:Colors.White
  },
  textlng: {
    fontSize: RFValue(18),
    color:Colors.White,
    marginVertical:RFValue(10)
  },
  btnText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: Colors.YANKEES_BLUE,
    paddingHorizontal: RFValue(10),
  },
  btn: {
    margin: RFValue(30),
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.White,
  },
});
