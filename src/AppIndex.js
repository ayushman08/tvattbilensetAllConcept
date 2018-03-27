import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,AsyncStorage,TouchableHighlight,Modal } from 'react-native';
 import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {Button} from "native-base"
// import getTheme from '../theme/components';
// import variables from '../theme/variables/commonColor';
// import LibraryList from './LibraryList';
// import { Header, Button, CardSection } from './components/common';

// import { Container, Title, Content, Icon, Card, CardItem, Body, Left, Right } from 'native-base';
// import { StyleProvider } from 'native-base';
// import Button from '../theme/components/Button';
// import Router from "./Router/Router"
import { Actions } from 'react-native-router-flux';
import ActionsheetExample from "./screens/actionsheet"
import AnatomyExample from "./screens/anatomy"
import Badge from "./screens/badge";
import ButtonExample from "./screens/button"
import CardExample from "./screens/card/card-image"
import FabExample from "./screens/fab/multiple"
import FooterExample from "./screens/footer/iconFooter"
import Input from "./screens/form/iconInput"
import LayoutExample from "./screens/layout/customCol"
import PickerExample from "./screens/picker/backButtonPicker"
import SearchExample from "./screens/searchbar"
import ServiceComponent from "./components/servicecomponent"

//AppIndex 
// class AppIndex extends Component {
//   constructor(){
//     super()
//     this.state={
//       modalData:"",
//       modalVisible: false,
//     }
//   }

//     setModalVisible(visible) {
//     this.setState({modalVisible: visible});
//     }
    
//   static navigationOptions = {
//         header: false }

//       //get the data onback pressed
//     getdata(season) {
//         alert(season);
//     }
      
      
//       //  componentWillMount(){AsyncStorage.setItem("", 'done');}
//    goToNext() {
//     // AsyncStorage.setItem("loggedIn", "false");
//           // Actions.about({ type: 'reset',typehello: 'Jane'});
//       //  this.props.navigation.navigate('About', { name: 'Jane' });
//       Actions.about({typehello: 'Jane', getdata:this.getdata.bind(this)});  
//      }
   
//     render() {

    
//      return (
//             <View style={{flex:1,margin:30} }>
//            <Modal
//           animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             alert('Modal has been closed.');
//           }}>
//           <View style={{marginTop: 22}}>
//             <View>
//               <Text>Hello World!</Text>
//               <Text></Text>

//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>Hide Modal</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

//         <TouchableHighlight
//           onPress={() => {
//             this.setModalVisible(true);
//           }}>
//           <Text>Show Modal</Text>
//         </TouchableHighlight>

//             {/* <SearchExample/> */}
//             {/* <PickerExample style={{flex:.1}}/> */}
//             {/* <Input/> */}
//            {/* < LayoutExample/> */}
//             {/* <Header headerText={'Albums'} /> */}
//             {/* <ActionsheetExample/> */}
//             {/* <Badge/> */}
//             {/* <CardExample/>
//             <ButtonExample/>
//             <FabExample/> */}
//             {/* <AnatomyExample/> */}
//             {/* <LibraryList/> */}
//          {/* <FooterExample/> */}
//          {/* <Button style={{width:"90%",justifyContent:"center",alignItems:"center",margin:20,backgroundColor:"grey"}} onPress={this.goToNext.bind(this)}><Text>Go to next</Text></Button> */}
//             {/* <CardSection>
             
//              </CardSection> */}
//             </View>
//             );
//       }
//     }
    
//     export default AppIndex;

//using sagas to fetch the data from the server

// import React , {Component}from "react";
// import { bindActionCreators } from "redux";
// import {Text,View,Image } from "react-native"
// import { connect } from "react-redux";

// import { requestApiData } from "./actions";

// class AppIndex extends Component{
//   componentDidMount() {
//     this.props.requestApiData();
//   }

//   person = (x, i) =>
//   //  console.log(x);
//     <View key={x.id.value}>
//       <Text>
//         {x.gender}
//       </Text>
//       <Text>
//         {x.name.first}
//       </Text>
//       <Text>
//         {x.name.last}
//       </Text>
//       <Image source={{uri:x.picture.medium}}
//        style={{width: 400, height: 400}} />
//       {/* <Img  src={x.picture.medium} /> */}
//     </View>;

//   render() {
//     const { results = [] } = this.props.data;
//     return results.length
//       ? <View>
//           {results.map(this.person)}
//         </View>
//       : <Text>loading...</Text>;
//   }
// }

// //get data in component from the reducers
// const mapStateToProps = state => ({ data: state.data });


// //dispatching the asyns function calls 
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ requestApiData }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(AppIndex);

//Check Actionsheet

// class AppIndex extends Component{

//   render(){
//     return(
     
//       <Text>Hello</Text>
//      )
//   }
//  }
//  export default  AppIndex;
import DashboardComponent from "./components/DashboardComponent/DashboardComponent"
class AppIndex extends Component {
  render() {
  
 return (
  <View style={{flex:1}}>
   <DashboardComponent/>
  </View>
   
     );
   }
 }
 
 export default AppIndex;