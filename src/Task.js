import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';

const Task = () => {
  function card() {
    return (
      <>
        <View style={[styles.slideContainer, styles.slide1]}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.box} activeOpacity={0.7}>
              <Text style={styles.text}>Customer Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box1} activeOpacity={0.7}>
              <Text style={styles.text}>New Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.num}>
            <Text style={styles.cardnum}>XXXX XXXX XXXX XXXX</Text>
          </View>
          <View style={styles.name}>
            <Text style={styles.cardname}>NAME SURNAME</Text>
          </View>
        </View>
      </>
    );
  }

  function box() {
    return (
      <>
        <View style={{marginBottom: RFValue(40)}}>
          <View style={[styles.squareBox, styles.elevationBox]}>
            <Image
              style={styles.img1}
              source={require('./Assets/Images/home.png')}
            />
            <Text style={styles.innerText}>Sit amet</Text>
          </View>
        </View>
      </>
    );
  }

  function box2() {
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.squareBox2, styles.elevationBox]}>
            <Image
              style={styles.img1}
              source={require('./Assets/Images/home.png')}
            />
          </View>
          <View style={styles.text3}>
            <Text style={styles.innerText2}>Lorem Ipsum</Text>
            <Text style={styles.innerText3}>Dolor</Text>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Card</Text>
        </View>
        <Swiper style={styles.wrapper}>
          <>{card()}</>
          <>{card()}</>
          <>{card()}</>
        </Swiper>
      </View>
      <View style={styles.card2}>
        <View style={styles.middleText}>
          <Text style={styles.text2}>Cutomer Card</Text>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <>{box()}</>
            <>{box()}</>
            <>{box()}</>
            <>{box()}</>
          </ScrollView>
        </View>
        
        <View style={styles.containerBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <>{box2()}</>
            <>{box2()}</>
            <>{box2()}</>
            <>{box2()}</>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1 / 2,
  },
  card2: {
    flex: 1 / 2,
  },
  slideContainer: {
    margin: RFValue(20),
    borderRadius: 10,
  },
  header: {
    marginTop: RFValue(20),
  },
  headerText: {
    fontSize: RFValue(24),
    textAlign: 'center',
    color: Colors.GRAY,
  },
  slide1: {
    flex: 1,
    backgroundColor: Colors.Neon_Blue,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  btn: {
    flexDirection: 'row',
  },
  box: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 10,
    margin: RFValue(10),
  },
  box1: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.White,
    borderRadius: 10,
    margin: RFValue(10),
  },
  text: {
    fontSize: RFValue(12),
    color: Colors.White,
  },
  text2: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginLeft: RFValue(20),
  },
  text3: {
    marginLeft: RFValue(20),
    marginTop: RFValue(20),
  },

  squareBox: {
    width: RFValue(120),
    backgroundColor: Colors.White,
    marginLeft: RFValue(20),
    marginTop: RFValue(15),
    borderRadius: 20,
    alignItems: 'center',
    padding: RFValue(20),
  },
  squareBox2: {
    width: RFValue(120),
    backgroundColor: Colors.White,
    marginLeft: RFValue(20),
    borderRadius: 20,
    alignItems: 'center',
    padding: RFValue(20),
    marginTop: RFValue(20),
  },
  elevationBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  innerText: {
    fontWeight: 'bold',
    marginTop: RFValue(10),
    fontSize: RFValue(14),
  },
  innerText2: {
    fontWeight: 'bold',
    marginTop: RFValue(10),
    fontSize: RFValue(14),
  },
  innerText3: {
    fontWeight: 'bold',
    marginTop: RFValue(10),
    fontSize: RFValue(14),
  },
  containerBox: {
    marginBottom: RFValue(210),
  },
  img1: {
    width: RFValue(40),
    height: RFValue(40),
  },
  num: {
    marginTop: RFValue(30),
    marginLeft: RFValue(50),
  },
  name: {
    marginTop: RFValue(30),
    marginLeft: RFValue(50),
  },

  cardnum: {
    fontSize: RFValue(18),
    color: Colors.White,
  },
  cardname: {
    fontSize: RFValue(18),
    color: Colors.White,
  },
  img: {
    width: 50,
    height: 50,
  },
});

export default Task;
