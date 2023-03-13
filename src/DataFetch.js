import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {albumPhotosurl} from './Url';
import Axios from 'axios';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';

const DataFetch = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(albumPhotosurl);

      setPostData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const submitData = () => {
    Axios({
      method:"POST",
      url:"https://jsonplaceholder.typicode.com/posts/1/comments",
      data:{
        postId:"1",
        name:"Amit",
        email:"sahil@gmail.com",
        website:"https://www.youtube.com/thapatechnical",
        mobile:"1456978239",
        description:"hyyy"
      },
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
        
      }
    }).then((resp) => {
      console.log("respones",JSON.stringify(resp.data))
    }).catch((err) => {
      console.log("err",err)
    })
    // alert("done")
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        {postData.map(list => {
          return (
            <View
              style={[styles.cardContainer, styles.elevationBox]}
              key={list.id}>
              <View style={styles.cardImg}>
                <Image source={{uri: list.image}} style={styles.cardImage} />
              </View>
              <View style={styles.cardBox}>
                <Text style={styles.bioText}>User Details</Text>
                <Text style={styles.cardText}> Name: {list.name}</Text>
                <Text style={styles.cardText}> Email: {list.email}</Text>
                <Text style={styles.cardText}> Mobile No : {list.mobile}</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={() => submitData()}>
            <Text style={styles.btnText}>Add Data</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DataFetch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.YANKEES_BLUE,
  },
  cardContainer: {
    backgroundColor: Colors.White,
    margin: RFValue(20),
    flex: 1,
  },
  elevationBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 10,
  },
  cardImage: {
    height: RFValue(200),
    width: RFValue(290),
    margin: RFValue(10),
  },
  cardImg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 / 2,
  },
  cardBox: {
    justifyContent: 'center',
    backgroundColor: Colors.GRAY,
    flex: 1 / 2,
  },
  bioText: {
    fontSize: RFValue(28),
    color: Colors.White,
    margin: RFValue(10),
  },
  cardText: {
    fontSize: RFValue(14),
    color: Colors.White,
    marginLeft: RFValue(10),
    marginBottom: RFValue(10),
  },
  btn: {
    marginBottom: RFValue(20),
  },
  btnText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: Colors.YANKEES_BLUE,
  },
  button: {
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: RFValue(10),
    backgroundColor: Colors.White,
  },
});
