import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';

const VideoPlay = () => {
  const videoPlayer = useRef(null);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.txt}>VideoPlay</Text>
        <Video
          controls={true}
          paused={true}
          ref={videoPlayer}
          source={require('./Assets/Video/video2.mp4')}
          style={styles.mediaPlayer}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.YANKEES_BLUE,
  },
  mediaPlayer: {
    height: RFPercentage(40),
    width: RFPercentage(40),
    justifyContent: 'center',
  },
  txt: {
    fontSize: RFValue(20),
    marginBottom: RFValue(10),
    color: Colors.White,
  },
});
