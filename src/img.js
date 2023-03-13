import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Colors from './Colors';

const img = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <ImageBackground
          imageStyle={{borderRadius: 50}}
          style={styles.imgView}
          source={require('./Assets/Images/model.png')}>
          <View style={styles.btnView}>
            <TouchableOpacity style={styles.btn}>
              <Text>hii</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default img;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    height: 250,
    width: 250,
    borderRadius: 50,
    backgroundColor:Colors.Gray
  },
  btnView:{
    position:"absolute",
    backgroundColor:Colors.White,
    borderColor:Colors.White,
     //borderTopStartRadius:20
     borderBottomEndRadius:40
  },
  btn: {
    backgroundColor: Colors.ORANGE,
    width: 80,
    paddingHorizontal:30,
    paddingVertical:20,
    borderRadius: 50,
   
    position: 'absolute',
    bottom: -250,
    //borderWidth:10,
    // borderColor:Colors.White,
    marginLeft:170
  },
});
