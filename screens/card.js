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


export default class GroupCard extends Component {
constructor(props){
  super(props)
}

  render(){
    return(
      <TouchableOpacity  onPress={()=>{
        globalThis.info = this.props.group
                  this.props.navigation.navigate("GroupScreen",{info:this.props.group})}} style = {{alignItems:'center',marginTop:20,height:250,width:200,backgroundColor:'#bababa',borderRadius:10}}>
      <Text style ={{color:'black',fontWeight:'bold'}}> {this.props.group.groupName}</Text>
      <Text style = {{color:"black"}}>Owner: {this.props.group.owner}</Text>
      <Text style = {{color:'black'}}>Amount of people:{this.props.group.memberCount}</Text>
      <Text style = {{color:'black'}}>A {this.props.group.genre} group</Text>
      </TouchableOpacity>
    )
  }
}