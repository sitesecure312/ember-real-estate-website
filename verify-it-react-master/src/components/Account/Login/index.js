import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import { WHITE, BLACK, BORDER_GRAY, GREEN } from 'AppColors';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  inputContainer: {
    marginTop: 35,
    marginHorizontal: 55,
    borderBottomWidth: 1,
    borderColor: BORDER_GRAY,
    paddingBottom: 12,
  },
  input: {
    fontSize  : 14,
    lineHeight: 20,
    height    : 25,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color     : BLACK,
    borderBottomWidth: 1,
    borderColor: BORDER_GRAY
  },
  iconPlaceholder: {
    width: 21,
    height: 21,
  },
  iconEmptyCheck: {
    width: 14,
    height: 14,
  },
  rememberPasswordContainer: {
    flexDirection: 'row',
    marginLeft: 55,
    marginTop: 20
  },
  txtRemember: {
    color: BLACK,
    marginLeft: 10,
    fontFamily: 'Open Sans',
    fontSize: 9,
    fontWeight: '800'
  },
  loginContainer: {
    marginHorizontal: 100,
    marginTop: 55,
    height: 48,
    borderRadius: 24,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtLogin: {
    backgroundColor: 'transparent',
    color: WHITE,
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '800'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: BLACK,
    fontFamily: 'Open Sans',
    fontSize: 16,
  },
  btnSignup: {
    marginTop: 24,
    width: 180,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK
  },
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize={'none'}
            placeholderTextColor={BLACK}
            placeholder="CELL NUMBER"
            onChangeText={value => this.setState({ email: value })}
            value={email}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize={'none'}
            secureTextEntry={true}
            placeholderTextColor={BLACK}
            placeholder="Password"
            onChangeText={value => this.setState({ password: value })}
            value={password}
          />
          <TouchableOpacity style={{ position: 'absolute', right: 0, bottom: 10 }}>
            <Image source={require('img/icon_question.png')} style={styles.iconPlaceholder} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.rememberPasswordContainer}>
          <Image source={require('img/icon_empty_check.png')} style={styles.iconEmptyCheck} />
          <Text style={styles.txtRemember}>REMEMBER ME</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginContainer}>
          <Text style={styles.txtLogin}>LOG IN</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.label}>Don’t have a account yet?</Text>
          <TouchableOpacity style={styles.btnSignup}>
            <Text style={styles.txtLogin}>SIGN UP FOR FREE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}