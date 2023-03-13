import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
const ImagePickers = () => {
  const [imageSource, setImageSource] = useState([]);
  const [pic, setPic] = useState([]);
  const openPicker = async () => {
    try {
      const options = {
        selectionLimit:1,
        mediaType: 'photo',
        includeBase64: false,
      };
      const response = await launchImageLibrary(options);
      console.log(response.assets);
      setImageSource(response.assets);
      const data = await launchCamera(options)
      setPic(data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(imageSource);
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>Select Image</Text>

      {imageSource.length > 0 ? imageSource.map((val, index) => {
        console.log(val);
        return(
          <View key={index}>
            <Text style={styles.imgtext}>Name : {val.fileName}</Text>
            <Image source={val} style={styles.img}/>
          </View>
        )
      }) : null}
      <View style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={() => openPicker()}>
          <Text style={styles.btnText}> Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePickers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(18),
    marginVertical: RFValue(5),
  },
  btn: {
    marginVertical: RFValue(9),
  },
  btnText:{
    color:Colors.White,
    fontSize:RFValue(18)
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: RFValue(8),
    paddingHorizontal: RFValue(20),
    backgroundColor: Colors.Neon_Blue,
  },
  imgtext: {
    fontSize: RFValue(16),
    marginVertical: RFValue(5),
    alignSelf: 'center',
  },
  img:{
    height:RFValue(150),
    width:RFValue(150),
    alignSelf: 'center',
  }
})

