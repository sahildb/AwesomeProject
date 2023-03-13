import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
const TabADetails = ({navigation}) => {
  const Data = [
    {
      id: 1,
      Name: 'Sahil',
      Age: 22,
    },
    {
      id: 2,
      Name: 'Dhaval',
      Age: 23,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>Welcom To Home Page</Text>
      <View style={styles.squareBox}>
        {Data.map(Value => {
          return (
            <View key={Value.id}>
              <Text style={styles.NameText}>Name: {Value.Name}</Text>
              <Text style={styles.AgeText}>Age: {Value.Age}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.buttonData}
          onPress={() => {
            navigation.navigate('DataList');
          }}>
          <Text style={styles.btnText}>Go to DataList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonData}
          onPress={() => {
            navigation.navigate('OpenCamera');
          }}>
          <Text style={styles.btnText}>Go to Camera</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonData}
          onPress={() => {
            navigation.navigate('GetLocation');
          }}>
          <Text style={styles.btnText}>Go to Location</Text>
        </TouchableOpacity>
       
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login Page');
        }}>
        <Text style={styles.btnText}>Go to Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabADetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.YANKEES_BLUE,
  },
  textName: {
    fontSize: RFValue(18),
    marginBottom: RFValue(10),
    color: Colors.White,
  },
  NameText: {
    fontSize: RFValue(18),
    marginVertical: RFValue(5),
  },
  AgeText: {
    fontSize: RFValue(18),
  },
  squareBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    padding: RFValue(20),
    marginBottom: RFValue(20),
    backgroundColor: Colors.White,
  },
  btn: {
    marginVertical: RFValue(10),
    flexDirection:"row"
  },

  
  btnText: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    color: Colors.YANKEES_BLUE,
  },
  button: {
    width: '35%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.White,
    marginTop: RFValue(10),
  },
  buttonData: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.White,
    marginHorizontal:RFValue(5)
  },
  buttonLocation: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.White,
    marginHorizontal:RFValue(5)

  },
});
