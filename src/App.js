import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import firebase from "firebase";
import thunk from "redux-thunk";

import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyAUU7H9s3NUYOTFJ4bKZ_fLORTPt5hZnAU",
      authDomain: "manager-c5d26.firebaseapp.com",
      databaseURL: "https://manager-c5d26.firebaseio.com",
      projectId: "manager-c5d26",
      storageBucket: "manager-c5d26.appspot.com",
      messagingSenderId: "682500024769"
    });
  };

  render() {
    const store = createStore(reducer, {}, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
