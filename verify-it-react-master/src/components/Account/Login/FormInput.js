import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({

});
export class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
      noError: false,
    };
  }

  componentWillMount() {
    this.checkPresets = {
      email   : /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
      password: /^.{6,}$/i,
    };
  }
  render() {
    return (
      <TextInput
        autoCapitalize={'none'}
        {...this.props}
        style={styles.inputStyle}
      />
    )
  }
}