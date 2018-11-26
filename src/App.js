import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as firebase from '@firebase/app';
import 'firebase/auth';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAmQpGE0MOaeoW-CkUHnBA9vuldjhcRGVY',
      authDomain: 'manager-a7fc1.firebaseapp.com',
      databaseURL: 'https://manager-a7fc1.firebaseio.com',
      projectId: 'manager-a7fc1',
      storageBucket: 'manager-a7fc1.appspot.com',
      messagingSenderId: '1097914282627'
    };
    firebase.default.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
