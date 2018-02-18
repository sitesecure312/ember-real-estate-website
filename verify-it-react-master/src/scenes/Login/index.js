import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Header } from './Header';
import { Login } from 'AppComponents';

const styles = StyleSheet.create({
  container: {
    flex           : 1,
    backgroundColor: 'white'
  },
});

export class LoginScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Login />
      </View>
    );
  }
};
