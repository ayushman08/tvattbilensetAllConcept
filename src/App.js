import React, { Component } from 'react';
// import { Platform, StyleSheet,Text,View} from 'react-native';
 import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
import { StyleProvider } from 'native-base';
import Router from './router/Router';
// import reducers from './reducers';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';
//get the api calls from the redux-saga
import store from "./store"
import Counter from './components/counter.js';
import Root from "native-base";
import ActionsheetExample from "./screens/actionsheet"



class App extends Component {
 render() {
  //use redux thunk  than uncomment this
  //const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
return (
       <Provider store={store}> 
       {/* <StyleProvider style={getTheme(variables)}> */}
       {/* <Services/> */}
       <Router />
       {/* <ActionsheetExample/> */}
       {/* <Counter/> */}
      {/* </StyleProvider> */}
      </Provider> 
  
    );
  }
}

export default App;

