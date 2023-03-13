import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
} from 'react-native-track-player';
import {songs} from './MusicData';
const {height, width} = Dimensions.get('window');
const Music = () => {
  const route = useRoute();
  const [currentSong, setCurrentSong] = useState(route.params.index);
  const ref = useRef();
  const playbackState = usePlaybackState();
  useEffect(() => {
    setTimeout(() => {
      ref.current.scrollToIndex({
        animated: true,
        index: currentSong,
      });
    }, 10);
  }, []);

  useEffect(() => {
    setupPlayer();
  }, []);
  const setupPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.Stop,
        ],

        compactCapabilities: [Capability.Play, Capability.Pause],
      });

      await TrackPlayer.add(songs);
    } catch (error) {}
  };

  const togglePlayback =async playbackState => {
    console.log(playbackState);
    if(playbackState === State.Paused || playbackState === State.Ready){
      await TrackPlayer.play();
    }else{
      await TrackPlayer.pause();
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          horizontal
          ref={ref}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          data={songs}
          renderItem={(item, index) => {
            return (
              <View style={styles.bannerView}>
                <Image source={item.item.image} style={styles.banner} />
              </View>
            );
          }}
        />
      </View>

      <Text style={styles.name}>{route.params.data.title}</Text>
      <Text style={styles.singeName}>{route.params.data.singer}</Text>
      <View style={styles.sliderView}>
        <Slider />
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity
          onPress={async () => {
            if (currentSong > 0) {
              setCurrentSong(currentSong - 1);
              ref.current.scrollToIndex({
                animated: true,
                index: currentSong - 1,
              });
              await TrackPlayer.skipToPrevious();
              togglePlayback(playbackState);
            }
          }}>
          <Image
            source={require('./Assets/Images/previous.png')}
            style={styles.previous}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await TrackPlayer.skip(1);
            togglePlayback(playbackState)
          }}>
          <Image
            source={require('./Assets/Images/playbutton.png')}
            style={styles.play}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            if (songs.length - 1 > currentSong) {
              setCurrentSong(currentSong + 1);
              ref.current.scrollToIndex({
                animated: true,
                index: currentSong + 1,
              });
              await TrackPlayer.skipToNext();
              togglePlayback(playbackState);
            }
          }}>
          <Image
            source={require('./Assets/Images/next.png')}
            style={styles.next}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Music;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '90%',
    height: RFPercentage(40),
    alignSelf: 'center',
    borderRadius: RFValue(10),
  },
  bannerView: {
    width: width,
    height: height / 2 - 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: RFValue(20),
    marginLeft: RFValue(25),
    color: Colors.Black,
  },
  singeName: {
    fontSize: RFValue(20),
    marginLeft: RFValue(25),
    color: Colors.Black,
    marginTop: RFValue(10),
  },
  sliderView: {
    marginTop: RFValue(20),
    alignSelf: 'center',
    width: RFPercentage(45),
  },
  btnArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: RFValue(50),
  },
  play: {
    width: RFValue(30),
    height: RFValue(30),
  },
  previous: {
    width: RFValue(20),
    height: RFValue(20),
  },
  next: {
    width: RFValue(20),
    height: RFValue(20),
  },
});
