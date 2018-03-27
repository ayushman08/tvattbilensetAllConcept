import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
// import DashboardScreenStyle from './DashboardScreenStyle';
// import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont2 from 'react-native-vector-icons/FontAwesome';

// import DashboardStyle from './DashboardScreenStyle';
const { width, height } = Dimensions.get('window');

class Menu extends Component {
    render() {
        return (
           <View style={styles.drawerContentView}>
             <View style={styles.headerViewStyle}>
             <Text>Hello</Text>
             <Image style={{height:300,width:"100%"}} resizeMode="cover" source={{ uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg' }}/>
             {/* <TouchableOpacity onPress={() =>null}> */}
{/*              <Image source={{ uri: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg' }} /> */}
{/*              </TouchableOpacity> */}
             </View>
            <View style={styles.drawerItemViewContainer}>
                    <TouchableOpacity onPress={() => null}>
                    <View style={styles.drawerMenuItemViewStyle}>
                                        <IconFont name="logout" size={25}  />
											<View style={styles.drawerItemTextViewStyle}>
												<Text style={styles.drawerItemText}>{"LOGOUT"}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                    <View style={styles.drawerMenuItemViewStyle}>
                                        <IconFont name="logout" size={25}  />
											<View style={styles.drawerItemTextViewStyle}>
												<Text style={styles.drawerItemText}>{"LOGOUT"}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                    <View style={styles.drawerMenuItemViewStyle}>
                                        <IconFont name="logout" size={25}  />
											<View style={styles.drawerItemTextViewStyle}>
												<Text style={styles.drawerItemText}>{"LOGOUT"}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                    <View style={styles.drawerMenuItemViewStyle}>
                                        <IconFont name="logout" size={25}  />
											<View style={styles.drawerItemTextViewStyle}>
												<Text style={styles.drawerItemText}>{"LOGOUT"}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                    <View style={styles.drawerMenuItemViewStyle}>
                                        <IconFont name="logout" size={25}  />
											<View style={styles.drawerItemTextViewStyle}>
												<Text style={styles.drawerItemText}>{"LOGOUT"}</Text>
											</View>
										</View>
					</TouchableOpacity>
                    </View>
                   </View>
         );
    }
}

const styles = StyleSheet.create({
    drawerContentView: {
     flex:1,
        backgroundColor: "grey"
      },
      headerViewStyle: {
        flex:4,
         backgroundColor:'black',
        
      },
      searchViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      searchImageStyle: {
        marginRight: 20
      },
    
      userImageViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        alignSelf:'center'
       
      },
      userImageStyle: {
        width: 100,
        height: 100,
        alignSelf:'center',
        marginTop:50,
        borderRadius: 100/2,
        
       
      },
      userNameTextStyle: {
        height: 23,
        color: "grey",
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 23,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 3,
    
      },
      userEmailTextStyle: {
        color: '#7F829F',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        marginTop: 3,
      },
      roundedBlueSwitchButtonStyle: {
        width: 166,
        borderRadius: 100,
        height: 40,
        backgroundColor: "grey",
        justifyContent: 'center',
        marginTop: 17,
      },
    
      swithButtonTextStyle: {
        color: "white",
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 25,
        marginRight: 25,
      },
    
      drawerMenuItemViewStyle: {
        paddingLeft: 25,
        margin:10,
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
      },
    
      drawerItemText:
        {
          color:"red", fontSize: 16, fontWeight: '500'
        },
    
      drawerItemViewContainer: {
        marginTop: 40
      },
    
      drawerItemTextViewStyle: {
        marginLeft: 30
      },
      selectedMenuItemBackgroundStyle: {
        backgroundColor: "blue",
      },
      menuItemBackgroundStyle: {
        backgroundColor: "transparent",
      },
      noticeBoardContainerViewStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 30,
        paddingBottom: window.height * 0.3,
      },
      managePropertyTextStyle: {
        color: "grey",
        fontSize: 20,
        paddingLeft: 5,
        fontWeight: '500'
      },
      statisticsViewContainer: {
        flexDirection: 'row',
        padding: 20,
      },
      statisticsLabelTextStyle: {
        textAlign: 'left',
        flex: 1,
        color: "blue",
        fontSize: 20,
      },
      statisticsTextStyle: {
        textAlign: 'right',
        color: "blue",
        fontSize: 20,
        flex: 1,
        fontWeight: 'bold',
      },
      scrollViewStyle: {
        flex:1,
        paddingBottom:80,
    
      },
    
      //new added styles
    
      drawerImageStyle:{
        flex:1,
        width:null,
        height:null,
        
      },
      drawerCrossIconStyle: {
        position:'absolute',
        alignSelf:'flex-end',
        padding:20
      },
    
      drawerPenIconStyle: {
        position:'absolute',
        height:100,
        width:30,
        right:10,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        top:80
      }
});

export default Menu
;