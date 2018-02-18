import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { GRAY } from 'AppColors';

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    height        : 60,
    alignSelf     : 'stretch',
    marginTop     : 3,
  },
  userText : {
    color            : 'black',
    backgroundColor  : 'transparent',
    fontSize         : 18,
    height           : 25,
    lineHeight       : 20,
    marginBottom     : 10,
    marginHorizontal : 10
  },
  toText : {
    flex      : 1,
    textAlign : 'left'
  },
  toLabel : {
    height     : 20,
    color      : GRAY,
    lineHeight : 20,
    fontSize   : 19
  },
  fromText : {
    flex      : 1,
    textAlign : 'right'
  },
  swapArea : {
    flexDirection : 'column',
    width         : 50,
    alignItems    : 'center'
  },
  exchangeIcon : {
    width      : 18,
    height     : 18,
    marginLeft : 3
  }
});

class ContactArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flagReverse : false
    };
    this.reverseUser = this.reverseUser.bind(this);
  }

  getReverseState() {
    return this.state.flagReverse;
  }

  reverseUser() {
    this.setState({ flagReverse: !this.state.flagReverse });
  }
  render() {
    let fromUser = this.props.currentUser.name;
    let toUser = this.props.selectedUser.name;

    if (this.getReverseState()) {
      toUser = this.props.currentUser.name;
      fromUser = this.props.selectedUser.name;
    }

    let component = null;
    if (this.props.pageType !== 'Swap') {
      component = (
        <TouchableOpacity onPress={this.reverseUser}>
          <Image style={styles.exchangeIcon} source={require('img/icon_exchange.png')} />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={[styles.userText, styles.fromText]}>
          {fromUser}
        </Text>
        <View style={styles.swapArea}>
          <Text style={styles.toLabel}>to</Text>
          {component}
        </View>
        <Text style={[styles.userText, styles.toText]}>
          {toUser}
        </Text>
      </View>
    );
  }
}
export default ContactArea;
