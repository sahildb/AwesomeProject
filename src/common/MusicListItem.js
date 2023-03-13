import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../Colors';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const MusicListItem = ({item, index, data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[
          styles.container,
          {marginBottom: index == data.length - 1 ? 30 : 0},
        ]}
        onPress={() => {
          navigation.navigate('Music', {
            data: item.item,
            index: item.index,
          });
        }}>
        <Image source={item.item.image} style={styles.songImage} />
        <View style={styles.nameView}>
          <Text style={styles.name}>{item.item.title}</Text>
          <Text style={styles.name}>{item.item.singer}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../Assets/Images/playbutton.png')}
            style={styles.play}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default MusicListItem;

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    elevation: RFValue(10),
    marginTop: RFValue(20),
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  songImage: {
    width: RFValue(100),
    height: RFValue(60),
    borderRadius: RFValue(10),
    margin: RFValue(10),
  },
  nameView: {
    paddingLeft: RFValue(15),
    width: '45%',
  },
  name: {
    fontSize: RFValue(16),
    fontWeight: '600',
  },
  play: {
    width: RFValue(30),
    height: RFValue(30),
  },
});
