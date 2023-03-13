import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';

const ReactAnimation = () => {
  const startValue = new Animated.ValueXY({x: 0, y: 200});
  Animated.timing(startValue, {
    toValue: {x: 260, y: 200},
    duration: 1000,
    useNativeDriver: false,
    //easing: Easing.back(2),
  }).start();
  function round(){
  let rotate =  startValue.x.interpolate({
      inputRange:[0,200],
      outputRange:["0deg","360deg"]
    })
    return {
        ...startValue.getLayout(),
        transform:[{rotate:rotate}]
    }
  }
  // useEffect(() => {
  //   myAnimation()
  // });
  // function myAnimation() {
  //   startValue.setValue({x: 0, y: 0});
  //   Animated.timing(startValue, {
  //     toValue: {x: 200, y: 300},
  //     duration: 1000,
  //     useNativeDriver: false,
  //     //easing: Easing.back(2),
  //   }).start(() => myAnimation());
  // }

  return (
    <View style={styles.container}>
      <Animated.View style={round()}>
        <View style={styles.square} />
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export default ReactAnimation;
