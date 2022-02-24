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

const groups = require('./temporaryGroups.json');
import GroupCard from './card'
export default class GroupScreen extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style = {{alignItems:'center'}}>
      <Text style = {{color:'black',fontSize:20,fontWeight:'bold'}}>
     {globalThis.info.groupName}
      </Text>
      <Text style = {{color:'black'}}>
     Amount of Members: {globalThis.info.memberCount}
      </Text>
         <Text style = {{color:'black'}}>
    A {globalThis.info.genre} group Created by {globalThis.info.owner}
      </Text>
         <Text style = {{color:'black'}}>
     {globalThis.info.description}
      </Text>
      <TouchableOpacity style={{borderRadius:10,alignContent:'center',alignText:'center',alignItems:'center',marginTop:50,width:100,height:50,backgroundColor:"green"}}> <Text style = {{alignText:'center',alignItems:'center'}}> Join this group!</Text> </TouchableOpacity>
      </View>
    )
  }

}