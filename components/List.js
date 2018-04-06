import React from 'react';
import { StyleSheet, Text, View, TextInput,Platform} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import { Picker,Fab } from 'native-base';



export default class Content extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
         data:[
             {
                 title:"Drop down div infront of or blocking its dropdown menu",
                 tags:"html,css,menu,dropdown",
                 key:1
             },
             {
                title:"Searching multiple files for list of words in a text file",
                tags:"linux,grep",
                key:2
                
            },
            {
                title:"Toggle icon on Like with Javascript",
                tags:"javascript,python,html,django,frontend",
                key:3
                
            },
            {
                title:"Modify data from XML Request with jquery",
                tags:"jquery,xmlhttprequest",
                key:4
                
            },
            {
                title:"ggplot2 - adding shading to a gantt chart to dilineate weekends",
                tags:"ggplot2,gantt-chart",
                key:5
                
            },  {
                title:"Cannot render const in a react component",
                tags:"javascript,reactjs,web-app,gatsby",
                key:6
                
            },
            {
                title:"Javascript submit a form with input type file using an iframe",
                tags:"javascript",
                key:7
                
            },
            {
                title:"UITableView insert row breaks scroll",
                tags:"ios,objective-c,tableview",
                key:8
                
            }
        
        
            ]
        };

    }



render() {
return(

    <View>

        {



this.state.data.map(data => {
    return(

<View   key={data.key} style={{flexDirection:"row",height:80,justifyContent:"space-between",
    padding:10,borderBottomWidth:1,borderColor:"#E0E0E0"}}>
        <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
        <View style={{alignSelf:"center",width:50,height:30,
        borderWidth:2,borderColor:"#D9DADC",borderRadius:5,alignItems:"center",
        justifyContent:"center"}}> 
        <Text style={{color:"#A8ADB2",fontSize:16}}>0</Text>
      
        </View>
        </View>
        <View style={{flex:4,alignSelf:"center"}}>
        <Text style={{color:"#5A8BC4"}}>{data.title}</Text>
        <Text style={{color:"#B1B1B1"}}>{data.tags}</Text>
        
         </View>
    </View>
    )
})
    
        }


    </View>
    
)

}

    }