import {
  //Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import Colors from './Colors';

const Animations = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255),
        },
      ],
    };
  });
  // const leftValue = useState(new Animated.Value(0))[0];
  // function moveBall() {
  //   Animated.timing(leftValue,{
  //       toValue:300,
  //       //duration:1000,
  //       useNativeDriver:false
  //   }).start()
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.main}>
        <Animated.View style={[styles.box, animatedStyles]} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => (offset.value = Math.random())}>
          <Text style={styles.btnText}>Move</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Animations;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: '#00BCD4',
  },
  btnText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: Colors.White,
  },
  button: {
    width: '30%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.GRAY,
    marginTop: RFValue(10),
  },
});
