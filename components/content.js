import React from 'react';
import { StyleSheet, Text, View, TextInput,Platform} from 'react-native';
import {FontAwesome,MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";
import { Picker,Fab,Icon } from 'native-base';
import { ScrollView } from 'react-native';
import List from "./List";
import PTRView from 'react-native-pull-to-refresh';

export default class Content extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1"
        };
      }


 _refresh() {
  return new Promise((resolve) => {
    setTimeout(()=>{resolve()}, 2000)
  });
 }

      onValueChange(value) {
        this.setState({
          selected1: value
        });
    }
render() {
  
    return(
      
        <View style={{flex:1,flexDirection:"column"}}>
        
        <View style={{height:60,flexDirection:"row",borderColor:"#E5E5E5",borderBottomWidth:1,paddingLeft:10,
        paddingRight:10,alignItems:"center"}}>
        <FontAwesome name="search" size={25} color="#7A7A7A" style={{flex:0.4,}}/>
        <TextInput underlineColorAndroid="transparent" placeholder="Search Questions" style={{flex:3}} />
        <Picker  
              mode="dropdown"
              style={{ flex:1 }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="Active" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>


      </View>
      
      <View style={{flex:6}}>
      <PTRView onRefresh={this._refresh} >
       
       <ScrollView>
           <List />
             
           </ScrollView>
           </PTRView>



           <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#F48024' }}
            position="bottomRight"
           onPress={() => alert("new question works")}>
      <MaterialCommunityIcons name="comment-question-outline" size={25} color="#F48C3A" />
            
          </Fab>
          </View>

       </View>
    )
}

}