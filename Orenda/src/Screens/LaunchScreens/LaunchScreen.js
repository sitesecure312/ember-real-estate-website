//LaunchScreen
import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity } from 'react-native'
import { Swiper } from 'Components';
import styles from './LaunchScreenStyles';
import { Images, Metrics } from 'Themes'
import { Button } from 'Components'

import { startUserLogin } from '../../app';

export default class LaunchScreen extends React.Component {    
   constructor(props){
      super(props);
      this.state = {
          pageIdx:0
      };      
  }  

  signup() {
    this.props.navigator.showModal({
      screen: 'Orenda.SignupScreen',
      title: 'SIGN UP',
    });
  }
  
  login(){
    startUserLogin();
  }  

  createSignupButton(){
    return  <TouchableOpacity style={{marginTop: 843 * Metrics.scaleHeight}} onPress={()=>{
                this.signup()
              }} >
              <View>
                <Image style={styles.coverSignImage} source={Images.sinup_btn} />
              </View>
            </TouchableOpacity>
  }

  createLoginButton(){
    return  <TouchableOpacity style={{marginTop: 10 * Metrics.scaleHeight}} onPress={()=>{
                this.login()
              }}>
              <View >
                <Image style={styles.coverSignImage} source={Images.login_btn} />
              </View>
            </TouchableOpacity>
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Swiper
          loop={true}
          >
          <Image style={[styles.coverImage, styles.center]} source={Images.cover_bg_1}>              
            {this.createSignupButton()}
            {this.createLoginButton()}
          </Image>

          <Image style={[styles.coverImage, styles.center]} source={Images.cover_bg_2}>            
            {this.createSignupButton()}
            {this.createLoginButton()}
          </Image>

          <Image style={[styles.coverImage, styles.center]} source={Images.cover_bg_3}>            
            {this.createSignupButton()}
            {this.createLoginButton()}
          </Image>

          <Image style={[styles.coverImage, styles.center]} source={Images.cover_bg_4}>            
            {this.createSignupButton()}
            {this.createLoginButton()}
          </Image>
      	</Swiper>
      </View>
    )
  }
}
