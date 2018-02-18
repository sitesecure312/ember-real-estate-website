import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, ScrollView, DatePickerAndroid } from 'react-native'
import Hr from '../../Themes/hr.dist'
import ModalDropdown from 'react-native-modal-dropdown'
import FBSDK from 'react-native-fbsdk'
import styles from './SignupScreenStyles';
import { Images, Metrics, Colors } from 'Themes'
import countryData from '../../Themes/Countries/countries.json';
import { Button, TextInput } from 'Components'

import * as firebase from 'firebase';

const {
  AccessToken,
  LoginButton,
  LoginManager,
  GraphRequest,
  GraphRequestManager
} = FBSDK;

export default class SignupScreen extends React.Component {
  static navigatorStyle = {
    navBarTextFontFamily:'Futura Heavy',
    navBarNoBorder:true,
		navBarTitleTextCentered: true
  };
   constructor(props){
      super(props);
      this.state = {
          username:'',
          email:'',
          password:'',
          birthday:new Date(),
          countyName:'Waiting...',
          countyList:[],
          avatarSource: Images.placeholderImg,
          emailSignup:false,
      };
      this._responseInfoCallback = this._responseInfoCallback.bind(this);
      console.ignoredYellowBox = [
         'Setting a timer'
      ];
  }  

  componentDidMount() {
    var url = 'https://freegeoip.net/json/';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          countyName: responseJson.country_name,   
          countyList: this.getCountryArray(),       
        });
      })
      .catch((error) => {
       //console.error(error);
      });
  }

  formatDate(){
    var month = this.state.birthday.getMonth() + 1;
    var day = this.state.birthday.getDate();
    var year = this.state.birthday.getFullYear();

    if(month < 10) month = '0' + month;
    if(day < 10) day = '0' + day;

    return [year, month, day].join('/');
  }

  async openAndroidDataPicker(){
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: this.state.birthday
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        month = month + 1;
        if(month < 10) month = '0' + month;
        if(day < 10) day = '0' + day;

        var dateStr = [year, month, day].join('-');
       
        this.setState({birthday:new Date(dateStr)}); 
      }else{
        alert("no");
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  }

  getCountryArray(){
    var countryNames = [];
    for(var i = 0; i < countryData.length ; i++){
      countryNames.push(countryData[i].name);
    }
    return countryNames;
  }

  _responseInfoCallback(error, result) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      this.state.email = result.email;
      this.state.password = "fbuser123";
      this.state.username = result.name;
      this.state.birthday = new Date(result.birthday);
      this.state.countyName = "";      
      this.signup('facebook');
    }
  }

  getGraphData(accessToken){
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: accessToken,
        parameters: {
          fields: {
            string: 'email,name,birthday,picture'
          }
        }
      },
      this._responseInfoCallback
    );

    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start()
  }

  async createDataBase(uid, status){
    try{
      await firebase.database().ref("users/" + uid).set({
        username:this.state.username,
        email:this.state.email,
        birthday:this.formatDate(),
        country:this.state.countyName,
        // profileImage:this.state.avatarSource
      }).then((data)=>{
        if(status == 'email'){
          this.setState({emailSignup:true})
        }else{
          this.goToAddCoffee();
        }
        // alert(JSON.stringify(data));
      })
    }catch (error){
      alert(error.toString());
    }
    
  }

  async signup(status) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((data)=>{
        this.createDataBase(data.uid, status);
      })
      
    } catch (error) {
      alert(error.toString())
    }
  }

  goToAddCoffee(){
    this.props.navigator.showModal({
      screen: 'Orenda.AddCoffeeBeanScreen',
      title: 'ADD COFFEE BEAN',
    });
  }


  render () {

    return (
      <View style={styles.container}>
        <ScrollView ref="scroll">
          <View style={[styles.center, {paddingTop:80 * Metrics.scaleHeight}]}>
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
          </View>

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

          <View style={{paddingTop: 60 * Metrics.scaleHeight}} />

          <Text style={[styles.textCaption, {paddingTop: 30 * Metrics.scaleHeight}]}>
            Sign Up The Following Form
          </Text>    
          
          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />
          
          <View style={{}} >
            <TextInput wide             
              onChangeValue={(text)=>{
                this.state.username = text;                 
              }}    
              onCustomFocus={()=>{                  
              
              }}         
            >Your Name*
            </TextInput>
          </View>

          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

          <View style={{}} >
            <TextInput wide 
              type={'email-address'}
              onChangeValue={(text)=>{
                this.state.email = text;                 
              }}    
              onCustomFocus={()=>{                  
              
              }}         
            >Your Email*
            </TextInput>
          </View>

          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

          <View style={{flexDirection:'row',width:Metrics.screenWidth - 40, marginLeft:20, marginRight:20, borderBottomColor:Colors.selectGrey, borderBottomWidth:0.5}} >
            <TextInput wide 
              secureText
              personal
              onChangeValue={(text)=>{
                this.state.password = text;                
              }}         
              onCustomFocus={()=>{ }}      
            >Your Password*
            </TextInput>
            
            <Image style={{marginTop: 60 * Metrics.scaleHeight, width:29 * Metrics.scaleWidth, height:29* Metrics.scaleWidth}} source={Images.trick_icon} />
            <Image style={{marginTop: 63 * Metrics.scaleHeight, marginLeft:30 * Metrics.scaleWidth, width:39 * Metrics.scaleWidth, height:23* Metrics.scaleHeight}} source={Images.password_icon} />
          </View>
          <Text style={[styles.textContent, {paddingTop:30 * Metrics.scaleHeight, textAlign:'right'}]}>min 8 characters with one symbol(e.g e123%ab)</Text>

          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

          <View style={{width:Metrics.screenWidth - 40, marginLeft:20, marginRight:20, borderBottomColor:Colors.selectGrey, borderBottomWidth:0.5}}>
            <Text style={[styles.content, styles.label, {textAlign: 'left', marginLeft:0}]}>
                  Your Birthday
            </Text> 
            <TouchableOpacity style={{marginTop: 10, paddingBottom:10}} onPress={()=>{    
                this.openAndroidDataPicker()
              }}>
              <Text style={[styles.input, {textAlign: 'left', marginLeft:0}]}>
                  {this.formatDate()}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

          <View style={{width:Metrics.screenWidth - 40, marginLeft:20, marginRight:20, borderBottomColor:Colors.selectGrey, borderBottomWidth:0.5}}>
            <Text style={[styles.content, styles.label, {textAlign: 'left', marginLeft:0}]}>
                  Your Country
            </Text> 
            <View style={{flexDirection:'row', paddingTop: 10, paddingBottom:10}} >
              <ModalDropdown 
                  style={{width:Metrics.screenWidth - 60}}
                  options={this.state.countyList}
                  dropdownStyle={{width:Metrics.screenWidth - 40}}
                  dropdownTextStyle={styles.input}
                  defaultValue={this.state.countyName}
                  textStyle={styles.input}
                  onSelect={(idx, value)=>{
                    this.setState({
                      countyName: value
                    });
                  }} />
                <Image style={{marginTop:20 * Metrics.scaleHeight, width:24 * Metrics.scaleWidth, height:14* Metrics.scaleWidth}} source={Images.v_icon} />
              
            </View>
          </View>

          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />

          <View style={{width:Metrics.screenWidth - 40, marginLeft:20, marginRight:20}}>
            <Text style={[styles.content, styles.label, {textAlign: 'left', marginLeft:0}]}>
                  Your Profile Picture
            </Text> 
            <View style={{paddingTop:10}}>                            
              <Image style={styles.avatar} source={this.state.avatarSource} />
              <TouchableOpacity style={styles.avatarEdit} onPress={()=>{
                
                }}>
                <View style={{}}>
                  <Image style={{resizeMode:"contain",width: Metrics.scaleWidth * 53, height: Metrics.scaleWidth * 53}} source={Images.avatar_edit_btn} />
                </View>
              </TouchableOpacity>
              <Text style={[styles.content, styles.label, {textAlign: 'left', marginLeft:0, paddingTop:10}]}>
                  * is mandatory
              </Text> 
            </View>
          </View>

          <View style={{paddingTop: 30 * Metrics.scaleHeight}} />
          
          <View style={{width:Metrics.screenWidth - 40, marginLeft:20, marginRight:20}}>
            <Text style={[styles.content, styles.label, {textAlign: 'left', marginLeft:0}]}>
                 By clicking Sign Up, you agree to out Terms & Condition and that you have read out Data Use Policy.
            </Text> 
          </View>
          {
            !this.state.emailSignup ?
              <TouchableOpacity style={{marginTop: 80 * Metrics.scaleHeight}} onPress={()=>{  
                {/*this.goToAddCoffee()*/}
                this.signup('email')
                }} >
                <View style={styles.center}>
                  <Image style={styles.coverSignImage} source={Images.sinup_btn1} />
                </View>
              </TouchableOpacity> 
            :
              <TouchableOpacity style={{marginTop: 80 * Metrics.scaleHeight}} onPress={()=>{  
                  this.goToAddCoffee()              
                }} >
                <View style={styles.center}>
                  <Image style={styles.coverSignImage} source={Images.ready_btn} />
                </View>
              </TouchableOpacity> 
          }
           

          <View style={{paddingTop:50}} />         
        </ScrollView>
      </View>
    )
  }
}
