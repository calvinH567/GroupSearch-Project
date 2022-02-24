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
import GroupCard from './card'
import GroupScreen from './groupCardScreen'
import { FlatList } from "react-native-gesture-handler";
let group =require('./temporaryGroups.json')
export default class MainMenu extends React.Component{


     keyExtractor = (item, index) => index.toString();

  renderItem = ({ item: group }) => {
    return <GroupCard group={group} navigation={this.props.navigation} />;
  };

  render(){
    return(
      <View style = {{alignItems:'center'}}>
      <Text>
      This is the Menu
      </Text>
      <FlatList
      keyExtractor={this.keyExtractor}
      renderItem={this.renderItem}
      data={group}/>
      </View>
    )
  }
}