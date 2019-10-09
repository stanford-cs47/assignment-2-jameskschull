import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
import { Images, Profiles } from './App/Themes';
import { Platform } from '@unimodules/core';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
  
      <SafeAreaView style={styles.container}>

        {/* NAVBAR */}
        <View style={styles.headerBar}>
          <Image source={Images.setting} style={{height: 30,
          width: 30,
          resizeMode: 'contain',
          tintColor: '#c5c5c5'}}/>
          <Image source={Images.logo} style={{height: 30,
          width: 80,
          resizeMode: 'contain'}}/>
          <Image source={Images.chat} style={{height: 30,
          width: 30,
          resizeMode: 'contain',
          tintColor: '#c5c5c5'}}/>
        </View>

        {/* IMAGE */}
        <View style={styles.profileCard}>
          <Image source={this.state.profileImage} style={{width: Dimensions.get('window').width - 70,
    height: Dimensions.get('window').width - 70}}/>
          <View style={styles.profileCardDetails}>
            
            <Text style={{fontWeight: 'bold', 
                          fontSize: 24,
                          marginRight: Dimensions.get('window').width - 210}}>
              {this.state.name}
              <Text style={{fontWeight: 'normal'}}>, {this.state.age}</Text>
            </Text>
       
            
            <Text style={{fontWeight: 'normal', 
                          color: 'gray',
                          fontSize: 16,
                          marginRight: Dimensions.get('window').width - 210}}>{this.state.occupation}</Text>

          </View>
        </View>

       {/* BUTTONS */}
        <View style={styles.buttonBar}>
          <TouchableOpacity style={styles.smallButton}>
            <Image source={Images.rewind} style={styles.smallIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton}>
            <Image source={Images.nope} style={styles.largeIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Image source={Images.boost} style={styles.smallIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.largeButton}>
            <Image source={Images.like} style={styles.largeIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Image source={Images.superLike} style={styles.smallIcon}/>
          </TouchableOpacity>
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    flexDirection: 'column',
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  headerBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
    width: Dimensions.get('window').width - 100,
    height: Platform.OS==='ios'? 44 : 56,
  },
  profileCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor:'white',
  },
  profileCardDetails: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  buttonBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 20,
    width: Dimensions.get('window').width - 70,
    alignItems: 'center' 
  },
  largeButton: {
    backgroundColor: 'white',
    borderRadius: 60,
    width: 60,
    height: 60,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  smallButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  largeIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  smallIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }
});