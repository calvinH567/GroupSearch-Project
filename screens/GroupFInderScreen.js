import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import GroupCard from './card'
import GroupScreen from './groupCardScreen'
import { FlatList } from "react-native-gesture-handler";
let group =require('./temporaryGroups.json')
export default class GroupFinderScreen extends Component {
  constructor(){
super()
this.states = {
  location:'',
  locationHasBeenSet:0
  

}
  }
     keyExtractor = (item, index) => index.toString();

  renderItem = ({ item: group }) => {
    return <GroupCard group={group} navigation={this.props.navigation} />;
  };
  render() {
   
    return (
      <View style={{ width: '100%', height: '100%' ,backgroundColor:'white'}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            height: '20%',
          }}>
          <ImageBackground
            style={{
              alignText: 'center',
              alignItems: 'center',
              justifyContent: 'center',
width: '100%', height: '150%'
            }}
            source={{
              uri: 'https://actuallygoodteamnames.com/wp-content/uploads/2020/10/Group-Names-for-Five-People-Featured-Image.jpg',
            }}>
     
            <View style={{ width:'100%',height:'150%', backgroundColor: 'rgba(0,0,0, 0.50)' }}>
              <Text
                style={{
                  position: 'absoloute',
                  marginLeft: 40,
                  marginTop: 85,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 30,
                }}>
                Find groups here!
              </Text>
              <Text
                style={{
                  position: 'absoloute',
                  marginLeft: 70,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 13,
                }}>
                Find new friends and groups
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{borderRadius:20,backgroundColor:'#bababa',width:"100%",height:155,marginTop:200}}>
           <LinearGradient
style = {{borderRadius:20,height:"100%"}}
        colors={["#757575", '#636363', '#000000']}
        //style={styles.button}>
        
      >
         <TextInput style= {{marginTop:20,borderColor:'black',textAlign:'center'}}
                  
                  onChangeText={location => this.setState({ location:location })}
                  placeholder={"Enter your location"}
                  placeholderTextColor={"white"}
                  multiline={true}
                  numberOfLines={3}
                 
                />
                <TouchableOpacity

                onPress={()=>{
                  this.props.navigation.navigate("MainMenu")
                }}
                style = {{justifyContent:'center',alignItems:'center',textAlign:'center',alignSelf:'center',width:100,height:50,backgroundColor:'green',marginTop:10,borderRadius:15}}><Text>Submit</Text></TouchableOpacity>
             </LinearGradient>
            
                </View>
                 <ImageBackground
            style={{
              alignText: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              position:"absoloute",
              marginBottom:0,
width: '100%', height: '70%'
            }}
            source={{
              uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-mountain-bikers-riding-on-forest-road-on-royalty-free-image-1593550274.jpg',
            }}> <View style={{marginBottom:170, width:'100%',height:'72%', backgroundColor: 'rgba(0,0,0, 0.50)' }}></View></ImageBackground>
      </View>
  
    );
  }
}
