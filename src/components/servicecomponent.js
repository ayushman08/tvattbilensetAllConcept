import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
   
    TouchableWithoutFeedback
} from 'react-native'
import {Icon} from "native-base";
import IonIcons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome'
const shows_first = [
    {
        key: 1,
        name:'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key: 2,
        name:'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key: 3,
        name:'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key: 4,
        name:'Supergirl',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    }]

let {width, height} = Dimensions.get('window')


class FlatListItem extends Component {

    passIndex(itemindex){
    this.props.getItemIndex(itemindex)
    }

    render() {          
        return (
            <TouchableWithoutFeedback  onPress={()=>this.passIndex(this.props.index)}>
            <Card style={{backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
            <Text >React</Text>
            <Image style={{width: width/3.2, height: 150}} source={{uri: this.props.item.image}}/>
            <Text >upto 7kg </Text>
            <Text style={{fontSize:10}}>React</Text>
            <Text style={{fontSize:10}} >React</Text>
            </Card>
            </TouchableWithoutFeedback>
        );
    }
}

class Service  extends Component{
 constructor(){
        super()
       this.state={
            selectedListIndex: "",
            selectedServiceSize:""
        }
    }


 handleSelectedServiceSize(serviceSize){
        if(serviceSize==="Small"){
            this.setState({selectedServiceSize:"Small"})
           //alert("small")
        }
       else  if(serviceSize==="Medium"){
        this.setState({selectedServiceSize:"Medium"})
           // alert("Medium")
        }
        else  if(serviceSize==="Large"){
            this.setState({selectedServiceSize:"Large"})
     // alert("Large")
        }
        
     else{this.setState({selectedServiceSize:""})}
    }
  
  render(){

if(this.state.selectedServiceSize==="Small"){alert("Small")}
if(this.state.selectedServiceSize==="Medium"){alert("Medium")}
if(this.state.selectedServiceSize==="Large"){alert("Large")}
if(this.state.selectedListIndex=== 0){alert("0")}
else if(this.state.selectedListIndex=== 1){alert("1")}
else if(this.state.selectedListIndex=== 2){alert("2")}
    //   else{this.setState({selectedListIndex:""})}
   
    return(
        <View style={{flex: 1}}>
        
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() =>null}>
                <Icon 
                style={{color:"white"}}
                    name="arrow-back"
                    
                    size={25}
                />
            </TouchableWithoutFeedback>
            <Text style={{color:"white"}}>Services</Text>
            <TouchableWithoutFeedback onPress={() =>null}>
            <IonIcons 
            name="md-notifications-outline"
                                    color="white"
                                    size={28}
 />
            </TouchableWithoutFeedback>
   </View>

        <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20,margin:20}}>Laundary</Text>
        <Text>Laundary</Text>
        <Text>Laundary</Text>
        <Text>Laundary</Text></View>
            
            <View style={{flexDirection:"row"}}>
            <TouchableWithoutFeedback style={{padding:5}}onPress={()=>this.handleSelectedServiceSize("Small")}>
            <Card style={[{backgroundColor:"white",justifyContent:"center",alignItems:"center"},this.state.selectedServiceSize==="Small"?styles.selectedcard:null]}>
            <Text >React</Text>
             <Image style={{width: width/3.2, height: 150}} source={{uri: shows_first.image}}/>
             <Text >upto 7kg </Text>
            <Text style={{fontSize:10}}>React</Text>
            <Text style={{fontSize:10}} >React</Text>
            </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>this.handleSelectedServiceSize("Medium")}>
            <Card style={[{backgroundColor:"white",justifyContent:"center",alignItems:"center"},this.state.selectedServiceSize==="Medium"?styles.selectedcard:null]}>
            <Text >React</Text>
            <Image style={{width: width/3.2, height: 150}} source={{uri: ""}}/>
            <Text >upto 7kg </Text>
            <Text style={{fontSize:10}}>React</Text>
            <Text style={{fontSize:10}} >React</Text>
            </Card>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>this.handleSelectedServiceSize("Large")}>
            <Card style={[{backgroundColor:"white",justifyContent:"center",alignItems:"center"},this.state.selectedServiceSize==="Large"?styles.selectedcard:null]}>
            <Text >React</Text>
            <Image style={{width: width/3.2, height: 150}} source={{uri:""}}/>
            <Text >upto 7kg </Text>
            <Text style={{fontSize:10}}>React</Text>
            <Text style={{fontSize:10}} >React</Text>
            </Card>
            </TouchableWithoutFeedback>
        </View>
        <View>
        <FlatList 
         horizontal
         ItemSeparatorComponent={() => <View style={{width: 5}} />}
                ref={"flatList"}
                data={shows_first}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem item={item} index={index} getItemIndex={(value)=>{this.setState({selectedListIndex:value})}}></FlatListItem>);
                }}
                >

            </FlatList>
        </View>
    </View>
      
    );
  }
}

export default Service;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'green',
        paddingHorizontal: 15,
        paddingTop: 10,
    }
    ,
    selectedcard:{
       borderColor: "blue",
       borderWidth: 10,
    }
})