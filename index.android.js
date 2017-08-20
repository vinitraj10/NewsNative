import React,{Component} from 'react';
import { AppRegistry,View,Text} from 'react-native';
//redux-imports
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './app/reducers';
import {createLogger}  from 'redux-logger'
import Header from './app/components/Header';
import Details from './app/containers/tags';
import News from './app/containers/news';

const logger = createLogger({
    //empty options
});
const store = applyMiddleware(ReduxThunk,logger)(createStore);

export default class App extends Component{
  render(){
    return (
      <Provider store = {store(rootReducer)} >
        <View>
          <Header/>
          <Details/>
          <News/>
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('newsapp',() => App);

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});*/