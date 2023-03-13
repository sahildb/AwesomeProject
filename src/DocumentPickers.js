import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
import FilePicker, {types} from 'react-native-document-picker';

const DocumentPickers = () => {
  const [data, setData] = useState([]);
  const openPicker = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        
        
      });
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>DocumentPickers</Text>
      {data.length > 0
        ? data.map((val, index) => {
            return (
              <View key={index} style={styles.midContainer}>
                <Text style={styles.imgText}>Name : {val.name}</Text>
                <Text style={styles.imgText}>Type : {val.type}</Text>
                <Image source={val} style={styles.img} />
              </View>
            );
          })
        : null}
      <View style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={() => openPicker()}>
          <Text style={styles.btnText}>Open </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DocumentPickers;

const styles = StyleSheet.create({
  container: {
    flex: RFValue(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.YANKEES_BLUE,
  },
  midContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: RFValue(18),
    color: Colors.White,
  },
  imgText: {
    fontSize: RFValue(18),
    color: Colors.White,
    marginVertical: RFValue(5),
  },
  btnText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: Colors.YANKEES_BLUE,
  },
  img: {
    height: RFValue(100),
    width: RFValue(100),
    borderWidth: RFValue(2),
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
    alignItems: 'center',
  },
  btn: {
    margin: RFValue(30),
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(10),
    backgroundColor: Colors.White,
  },
});
