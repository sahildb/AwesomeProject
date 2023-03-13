import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Colors from './Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SelectDropdown from 'react-native-select-dropdown';
const AddTextInput = props => {
  return (
    <TextInput
      {...props}
      placeholder="Enter Adress"
      style={styles.addressText}
    />
  );
};
const Registration = () => {
  const State = ['Gujarat', 'Panjab', 'Rajasthan', 'Up'];
  const City = ['Surat', 'Amritsar', 'Jaipur', 'Lucknow'];
  let data = [
    {
      value: 'Banana',
    },
    {
      value: 'Mango',
    },
    {
      value: 'Pear',
    },
  ];

  return (
    <KeyboardAwareScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registration</Text>
      </View>
      <View>
        <Text style={styles.fname}>First Name</Text>
        <TextInput style={styles.input} placeholder="First Name" />
      </View>
      <View>
        <Text style={styles.mname}>Middle Name</Text>
        <TextInput style={styles.input} placeholder="Middle Name" />
      </View>
      <View>
        <Text style={styles.lname}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Last Name" />
      </View>
      <View>
        <Text style={styles.address}>Address</Text>
        <View
          style={{
            borderWidth: 1,
            margin: RFValue(15),
          }}>
          <AddTextInput multiline numberOfLines={4} />
        </View>
      </View>
      <View>
        <Text style={styles.gendre}>Gender</Text>
        <View style={styles.gendreText}>
          <Text style={styles.male}>Male</Text>
          <Text style={styles.fmale}>Female</Text>
        </View>
      </View>
      <View style={styles.state}>
        <Text style={styles.stateText}>State</Text>
        <View style={styles.statebutton}>
        <SelectDropdown
            data={State}
            defaultButtonText={'Select State'}
            buttonStyle={styles.button2}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
         
        </View>
      </View>
      <View style={styles.city}>
        <Text style={styles.cityText}>City</Text>
        <View style={styles.citybutton}>
          <SelectDropdown
            data={City}
            defaultButtonText={'Select City'}
            buttonStyle={styles.button2}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View>
      </View>
      <View>
        <Text style={styles.mname}>Middle Name</Text>
        <TextInput style={styles.input} placeholder="Middle Name" />
      </View>
      <View>
        <Text style={styles.mname}>Middle Name</Text>
        <TextInput style={styles.input} placeholder="Middle Name" />
      </View>
      <View>
        <Text style={styles.mname}>Middle Name</Text>
        <TextInput style={styles.input} placeholder="Middle Name" />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: RFValue(20),
  },
  headerText: {
    fontSize: RFValue(24),
    textAlign: 'center',
    color: Colors.RED
  },
  input: {
    margin: RFValue(14),
    borderWidth: 1,
    padding: 10,
  },
  mname: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  lname: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  fname: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  address: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  gendre: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  gendreText: {
    flexDirection: 'row',
    margin: RFValue(14),
  },
  stateText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  cityText: {
    fontSize: RFValue(16),
    marginLeft: RFValue(14),
  },
  addressText: {
    textAlignVertical: 'top',
  },
  male: {
    marginLeft: RFValue(16),
    fontSize: RFValue(16),
  },
  fmale: {
    marginLeft: RFValue(30),
    fontSize: RFValue(16),
  },
  state: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  city: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RFValue(20),
  },
  statebutton: {
    marginLeft: RFValue(30),
  },
  citybutton: {
    marginLeft: RFValue(38),
  },

  button1: {
    // borderRadius: 20,
    borderWidth: 1,
    width:120
  },
  button2: {
    borderRadius: 20,
  },
});

export default Registration;
