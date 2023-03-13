import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Colors from './Colors';
const {width, height} = Dimensions.get('window');

const data = [
  require('./Assets/Images/p2.jpg'),
  require('./Assets/Images/p3.jpg'),
  require('./Assets/Images/p4.jpg'),
  require('./Assets/Images/p5.jpg'),
  require('./Assets/Images/p6.jpg'),
  require('./Assets/Images/italy.jpeg'),
];
const ImageGallery = () => {
  const [selectedIndex, setselectedIndex] = useState(0);
  const bottomRef = useRef();
  const topRef = useRef();
  return (
    <View style={styles.main}>
      <FlatList
        horizontal
        ref={topRef}
        onScroll={
            e => {
                const index = e.nativeEvent.contentOffset.x/width.toFixed(0);
                setselectedIndex(index)
                bottomRef.current.scrollToIndex({animated: true, index: index});
            }
          }
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item, index}) => {
          return <Image source={item} style={styles.img} />;
        }}
      />
      <View style={styles.imgShow}>
        <FlatList
          horizontal
          pagingEnabled
          ref={bottomRef}
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={selectedIndex}
          data={data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.imgbutton}
                onPress={() => {
                  setselectedIndex(index);
                  topRef.current.scrollToIndex({animated: true, index: index});
                }}>
                <Image
                  source={item}
                  style={{
                    width: selectedIndex == index ? 90 : 50,
                    height: selectedIndex == index ? 90 : 50,
                    borderRadius: selectedIndex == index ? 45 : 10,
                    borderColor: Colors.White,
                    borderWidth: selectedIndex == index ? 2 : 0,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  imgShow: {
    position: 'absolute',
    bottom: 20,
  },
  imgbutton: {
    width: 90,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: width,
    height: height,
  },
});
