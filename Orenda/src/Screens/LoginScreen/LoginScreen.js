import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, ScrollView } from 'react-native'
import FBSDK from 'react-native-fbsdk'
import styles from './LoginScreenStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput } from 'Components'
import Hr from '../../Themes/hr.dist'

import * as firebase from 'firebase';
const {
  AccessToken,
  LoginButton,
  LoginManager,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

import { startMainTab } from '../../app';

export default class LoginScreen extends React.Component {
  static navigatorStyle = {
    navBarTextFontFamily:'Futura Heavy',
    navBarHidden: true
  };
   constructor(props){
      super(props);
      this.state = {
          email:'',
          password:''
      };
      this._responseInfoCallback = this._responseInfoCallback.bind(this);
      console.ignoredYellowBox = [
         'Setting a timer'
      ];
  }  

  _responseInfoCallback(error, result) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.state.email = result.email;
      this.state.password = 'fbuser123';
      this.login();
    }
  }

  getGraphData(accessToken){
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: accessToken,
        parameters: {
          fields: {
            string: 'email,name'
          }
        }
      },
      this._responseInfoCallback
    );

    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start()
  }

  async login(){
    
    try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((data)=>{
          startMainTab()
        });
    } catch (error) {
        alert(error.toString())
    }

  }

  signup(){
    this.props.navigator.showModal({
      screen: 'Orenda.SignupScreen',
      title: 'SIGN UP',
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={[styles.coverImage, styles.center]} source={Images.login_bg}>
          <ScrollView ref="scroll">
            <View style={[styles.center, {paddingTop:420 * Metrics.scaleHeight}]}>
                <LoginButton                
                  publishPermissions={["publish_actions"]}
                  onLoginFinished={
                    (error, result) => {
                      if (error) {
                        alert("login has error: " + result.error);
                      } else if (result.isCancelled) {
                        alert("login is cancelled.");
                      } else {
                        AccessToken.getCurrentAccessToken().then(
                          (data) => {
                            let accessToken = data.accessToken;
                            this.getGraphData(accessToken);    
                          }
                        )
                      }
                    }
                  }
                />
                <View style={{paddingTop: 60 * Metrics.scaleHeight}} /> 

                <Hr lineColor='#b8b8b8' text='OR' 
                  lineStyle={{
                    backgroundColor: "#b8b8b8",
                    height: 1
                  }}
                  textStyle={{
                    color: "#b8b8b8",
                    fontSize: 15,
                    textDecorationLine: "underline",
                    textDecorationStyle: "solid",
                    textDecorationColor: "#000"
                }} />  

                <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

                <View style={{}} >
                  <TextInput wide 
                    onChangeValue={(text)=>{
                      this.state.email = text;                 
                    }}    
                    onCustomFocus={()=>{                  
                    
                    }}         
                  >Your UserName or Email
                  </TextInput>
                </View>  

                <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

                <View style={{}} >
                  <TextInput wide 
                    secureText
                    onChangeValue={(text)=>{
                      this.state.password = text;                
                    }}         
                    onCustomFocus={()=>{ }}      
                  >Your Password
                  </TextInput>
                </View>

                <TouchableOpacity style={{marginTop: 80 * Metrics.scaleHeight}} onPress={()=>{  
                    this.login();
                    {/*startMainTab()*/}
                  }} >
                  <View style={styles.center}>
                    <Image style={styles.coverSignImage} source={Images.login_btn1} />
                  </View>
                </TouchableOpacity>  

                <TouchableOpacity style={{marginTop: 30 * Metrics.scaleHeight}} onPress={()=>{  
                    this.signup();             
                  }} >
                  <View style={styles.center}>
                    <Image style={styles.coverSignImage} source={Images.rigister_btn} />
                  </View>
                </TouchableOpacity> 
            </View>
          </ScrollView>
        </Image>        
      </View>
    )
  }
}
