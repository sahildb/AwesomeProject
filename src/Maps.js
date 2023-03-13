import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import MapView, {Callout, Polygon, Polyline} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
const Maps = () => {
  const [marker, setMarker] = useState();
  const [latlng, setLatlng] = useState();
  let coordinates = [
    {latitude: 21.1702, longitude: 72.8311},
    {latitude: 21.1474, longitude: 72.7926},
    // {latitude: 37.7665248, longitude: -122.4161628},
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text style={styles.mapText}>map</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 21.1702,
            longitude: 72.8311,
            latitudeDelta: 0.222,
            longitudeDelta: 0.121,
          }}
          onPress={e => {
            const LatLng = e.nativeEvent.coordinate;
            console.log(LatLng);
            setMarker(LatLng);
          }}>
          <Marker
            draggable
            coordinate={marker}
            onPress={e => setLatlng(e.nativeEvent.coordinate)}>
            <Image source={require('./Assets/Images/marker.png')} />
            <Callout>
              <Text>hyyy {latlng}</Text>
            </Callout>
          </Marker>
          {/* <Polyline
            coordinates={coordinates}
            strokeWidth={6}
          />
          {coordinates.map((marker,index) => {
            return (
              <Marker
              key={index}
                draggable
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.name}>
               
              </Marker>
            );
          })} */}
          {/* <Polygon
            coordinates={coordinates}
            fillColor={Colors.White}
            strokeWidth={3}
          />
          {coordinates.map((marker,index) => {
            return (
              <Marker
              key={index}
                draggable
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.name}>
                <Image source={require('./Assets/Images/marker.png')} />
              </Marker>
            );
          })} */}
        </MapView>
      </View>
    </SafeAreaView>
  );
};
export default Maps;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapText: {
    fontSize: RFValue(18),
    alignSelf: 'center',
    marginTop: RFValue(5),
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: RFValue(40),
  },
});
