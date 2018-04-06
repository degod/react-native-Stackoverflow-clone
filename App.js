import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome,MaterialIcons,
  MaterialCommunityIcons} from "@expo/vector-icons";
import Content from './components/content';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.toolbar}>
      <Text style={{fontWeight:"bold",color:"#757678",fontSize:21,marginLeft:10,marginTop:10}}> Stack Overflow</Text>
     <MaterialIcons name="more-vert" size={30} color="#737373" style={{marginRight:10,marginTop:10}} />
   
    </View>
      <View style={styles.content}>
      <Content /> 

 
      </View>
      <View style={styles.footer}>
      <View style={{alignSelf:"center",alignItems: 'center',
  justifyContent: 'flex-start'}}>
      <MaterialCommunityIcons name="comment-question-outline" size={25} color="#F48C3A" />
      <Text style={{color:"#F48C3A",fontSize:12}}>Questions</Text>
      </View>

 <View style={{alignSelf:"center",alignItems: 'center',
  justifyContent: 'flex-start'}}> 
      <FontAwesome name="inbox" size={25} color="#929292" />
      <Text style={{color:"#929292",fontSize:12}}>Inbox</Text>
      </View>


     <View style={{alignSelf:"center",alignItems: 'center',
  justifyContent: 'flex-start'}}>
      <FontAwesome name="trophy" size={25} color="#929292" />
      <Text style={{color:"#929292",fontSize:12}}>Achivements</Text>
      </View>
      <View style={{alignSelf:"center",alignItems: 'center',
  justifyContent: 'flex-start'}}>
       <MaterialIcons name="more-vert" size={25} color="#929292" />
      <Text style={{color:"#929292",fontSize:12}}>More</Text>
      </View>

      </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column"
  },
  toolbar: {
backgroundColor:"#FAFAFA",
elevation:3,
alignItems: 'center',
flexDirection:"row",
flex:1.2,
justifyContent:"space-between"
  },
  content : {
    flex:7
  },
  footer: {
    flex:1,
    backgroundColor: "#F8F8F8",
    borderTopWidth: 1,
    borderColor: "#E6E6E6",
    flexDirection: 'row',
    alignItems:"center",
justifyContent:"space-between",
paddingLeft:10,
paddingRight:10,
    
  }
});
