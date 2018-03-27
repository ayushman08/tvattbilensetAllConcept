// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
//  import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from '../reducers';
// import getTheme from '../theme/components';
// import variables from '../theme/variables/commonColor';
// import LibraryList from './LibraryList';
// import { Header } from './components/common';
// import { Container, Title, Content, Button, Icon, Card, Header, CardItem, Body, Left, Right } from 'native-base';
// import { } from 'native-base';
// import Router from "./Router/Router"


// class About extends Component {
//   static navigationOptions = {
//     header: false }

//     constructor(props) {
//     super(props);
//     }


//      goBack() {
//         this.props.navigation.pop();
//         }

//       gotoNext() {
//       this.props.navigation.navigate('Datepick');
//       }
    
//       render() {
//             const { params } = this.props.navigation.state;
//           return (
//            <Container>
//            <Header>
//            <Button transparent onPress={() => this.goBack()}>
//             <Icon name='arrow-back' style={{ color: 'blue' }} />
//             </Button>
//             <Body style={{ color: 'blue' }}>
//             <Title style={{ color: 'blue' }}>About</Title>
//            </Body>
//            </Header>
//            <Content>
          
//             <Text>{params.name}</Text>
//              <Button onPress={() => this.goBack()} style={{ paddingRight: 10 }}>
//               <Icon name='arrow-back' style={{ color: 'black' }} /><Text>Go Back</Text>
//             </Button>

//             <Button onPress={() => this.gotoNext()} style={{ paddingRight: 10 }}>
//               <Icon name='arrow-back' style={{ color: 'black' }} /><Text>Go Back</Text>
//             </Button>
//             </Content>
//             </Container> 
//         );
//       }
//     }
    
//     export default About;
import React, { Component } from 'react';
import {
    Text,
    View,
   TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    AsyncStorage
   
} from 'react-native'

import Header from '../../src/components/Header';
// import List from './components/List';
import Menu from '../../src/components/Menu';
// import Slide from './components/Slider';
import SideMenu from 'react-native-side-menu';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'
import IonIcons from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

class About extends Component {
      constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isloggedIn:""
        }; }

   static navigationOptions = {
        header: false
    }
 componentWillMount(){

        // this.setState({isloggedIn:AsyncStorage.getItem("loggedIn")})
        //const isloggedIn =AsyncStorage.getItem("loggedIn");
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen) {
        this.setState({ isOpen });
    }

    goBack(){
        this.props.getdata("HelloBack");
        Actions.pop();
    }


    render() {
       // console.log(this.props.name);//this will give the ke name of screen
    //    alert (this.props.name);
    // if()

    
    // if(){}
    // if(){}
    // if()
    // if()
        //  alert (this.props.typehello);
        console.log(this.props);
        return (
            <View style={{ flex: 1 }}>
                <SideMenu
                    menu={ <View style={styles.menu}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarImage}>
                            {/* <Image 
                                style = {styles.avatar}
                                source={require('../images/user.png')}
                            /> */}
                            <Text style = {styles.text}>mario</Text>
                        </View>
                        <Icon 
                            name="exchange"
                            color = "white"
                            size = {25}
                        />
                    </View>
                    <ScrollView style={styles.scrollContainer}>
                        <View style={styles.textWithIcon}>
                            <View style={styles.withIcon}>
                                <Icon 
                                    style={styles.iconWithText}
                                    name="download"
                                    color="white"
                                    size={28}
                                />
                                <Text style={styles.text}>My Downloads</Text>
                            </View>
                            <Icon 
                                style={styles.rightIcon}
                                name="angle-right"
                                color="white"
                                size={25}
                            />
                        </View>
                        <View style={styles.textWithIcon}>
                            <View style={styles.withIcon}>
                                <IonIcons 
                                    style={styles.iconWithText}
                                    name="md-checkmark"
                                    color="white"
                                    size={28}
                                />
                                <Text style={styles.text}>My List</Text>
                            </View>
                            <Icon 
                                style={styles.rightIcon}
                                name="angle-right"
                                color="white"
                                size={25}
                            />
                        </View>
                        <TouchableOpacity onPress={()=>{Actions.home()}}>
                        <View style={[styles.items, this.props.name==="hell"?styles.itemSelected:null]} onPress={()=>Actions.home()}>
                            <Text style={styles.text}>Home</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={[styles.noSelectedItems,this.props.name==="about"?styles.itemSelected:null]}>
                            <Text style={styles.text}>Available for Download</Text>
                        </View>
                        <View style={[styles.noSelectedItems,this.props.name==="about"?styles.itemSelected:null]}>
                            <Text style={styles.text}>Netflix Originals</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>TV Shows</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>Actions & Adventure</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>Children & Family Movies</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>Comedies</Text>
                        </View>    
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>Documentaries</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>Dramas</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                            <Text style={styles.text}>Independent Movies</Text>
                        </View>
                        <View style={styles.noSelectedItems}>
                      <Text style={styles.text}>Logout</Text> 
                        </View>
                    </ScrollView>
                </View>}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{ flex: 1 }}
                >
                    <View style={[{ flex: 1 }, styles.container]}>
                        <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                        {/* <Slide /> */}
                        {/* <List navigation={this.props.navigation} /> */}
                        <TouchableOpacity onPress={()=> this.goBack()}><Text>Go Back</Text></TouchableOpacity>
                    </View>
                </SideMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        },
        menu: {
            flex: 1,
            width: width,
            height: height,
            backgroundColor:"#191919"
        },
        avatarContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: width / 2 + 59,
            borderColor: '#000',
            borderBottomWidth: 3,
            paddingHorizontal: 20,
            paddingVertical: 20
        },
        avatar: {
            width: 60,
            height: 60,
            marginRight: 20
        },
        avatarImage: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        text: {
            color: '#b3b3b3',
            fontSize: 15
        },
        textWithIcon: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            borderColor: '#000',
            borderBottomWidth: 3
        },
        withIcon: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        scrollContainer: {
            width: width / 2 + 59
        },
        rightIcon: {
            paddingRight: 20
        },
        iconWithText: {
            marginRight: 10,
            paddingLeft: 20
        },
        items: {
            paddingVertical: 15,
            paddingLeft: 20,
            marginTop: 5
        },
        itemSelected:{
           
            backgroundColor:"red",
            borderLeftWidth: 5,
            borderColor: 'red'
        },
        noSelectedItems: {
            paddingVertical: 15,
            paddingLeft: 25,
            marginTop: 5
        }
    }
);

export default About;
