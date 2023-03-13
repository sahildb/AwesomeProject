import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from './Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {songs} from './MusicData';
import MusicListItem from './common/MusicListItem';

const HomeMusic = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Home Music</Text>
        </View>
        <FlatList
          data={songs}
          renderItem={(item,index) => {
            return <MusicListItem item={item} index={index} data={songs}/>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.GRAY
  },
  header: {
    backgroundColor: Colors.White,
    padding: RFValue(10),
    elevation: RFValue(5),
  },
  text: {
    color: Colors.GRAY,
    fontSize: RFValue(20),
  },
});
