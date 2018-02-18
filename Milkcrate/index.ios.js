/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Image, Dimensions, TextInput, TouchableOpacity, Navigator } from 'react-native';
// import AppIntro from 'react-native-app-intro';
import AppIntro from './AppIntro';
import Button from './components/Button';
import TabNavigatorView from './screens/tabnavigatorview/TabNavigatorView';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 0,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
  },
  title: {
    color: '#5E8AA3',
    fontSize: 24,
    fontFamily: 'Blanch',
    paddingBottom: 20,
  },
  description: {
    fontFamily: 'Open Sans',
    color: '#5E8AA3',
    fontSize: 12,
    paddingBottom: 7,
  },
});

class Milkcrate extends Component {

  onSkipBtnHandle = (index) => {
    console.log(index);
  }
  doneBtnHandle = () => {
  }
  loginBtnHandle = (name) => {
    this.props.navigator.push({name: 'TAB_NAVIGATOR'});
  }
  contactUsBtnHandle = () => {
    alert("Contact Us");
  }
  nextBtnHandle = (index) => {
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
      >

      <View style={[styles.slide,{ backgroundColor: '#fff' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 375, height: 480 }} source={require('./img/introduction/background/bk-image1.png')} />
          </View>
          <View style={{
            position: 'absolute',
            paddingVertical: height * 0.2,
            left: width/4,
            alignItems: 'center',
          }} level={20}
          >
            <Image style={{ width: 233, height: 112 }} source={require('./img/introduction/background/app-title.png')} />
          </View>
        </View>
        <View style={[styles.info, {padding: 40}]}>
          <View level={15}><Text style={styles.description}>A platform to help individuals like</Text></View>
          <View level={15}><Text style={styles.description}>you make a difference for the</Text></View>
          <View level={15}><Text style={styles.description}>environment and your community.</Text></View>
        </View>
      </View>

      <View style={[styles.slide, { backgroundColor: '#fff' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 375, height: 480 }} source={require('./img/introduction/background/bk-image2.png')} />
          </View>
        </View>
        <View style={[styles.info, {paddingBottom: 80}]}>
          <View level={10}><Text style={[styles.title, {fontSize: 48, paddingBottom: 8}]}>DISCOVER</Text></View>
          <View level={15}><Text style={styles.description}>And check in to hundreds of sustainable</Text></View>
          <View level={15}><Text style={styles.description}>businesses in your neighborhood.</Text></View>
        </View>
      </View>

      <View style={[styles.slide, { backgroundColor: '#fff' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 375, height: 480 }} source={require('./img/introduction/background/bk-image3.png')} />
          </View>
        </View>
        <View style={[styles.info, {paddingBottom: 80}]}>
          <View level={10}><Text style={[styles.title, {fontSize: 48, paddingBottom: 8}]}>TAKE IMPACTFUL ACTIONS</Text></View>
          <View level={15}><Text style={styles.description}>Take part in our weekly challenges, or earn</Text></View>
          <View level={15}><Text style={styles.description}>points for taking random actions throughout</Text></View>
          <View level={15}><Text style={styles.description}>the week.</Text></View>
        </View>
      </View>

      <View style={[styles.slide, { backgroundColor: '#fff' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 375, height: 480 }} source={require('./img/introduction/background/bk-image4.png')} />
          </View>
        </View>
        <View style={[styles.info, {paddingBottom: 80}]}>
          <View level={10}><Text style={[styles.title, {fontSize: 48, paddingBottom: 8}]}>PARTICIPATE</Text></View>
          <View level={15}><Text style={styles.description}>In volunteer opportunities and</Text></View>
          <View level={15}><Text style={styles.description}>green-themed events, all found in our</Text></View>
          <View level={15}><Text style={styles.description}>categorized calendar.</Text></View>
        </View>
      </View>

      <View style={[styles.slide, { backgroundColor: '#fff' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 375, height: 480 }} source={require('./img/introduction/background/bk-image5.png')} />
          </View>
        </View>
        <View style={[styles.info, {paddingBottom: 80}]}>
          <View level={10}><Text style={[styles.title, {fontSize: 48, paddingBottom: 8}]}>EARN POINTS & REWARDS</Text></View>
          <View level={15}><Text style={styles.description}>Check in, check off actions, register for</Text></View>
          <View level={15}><Text style={styles.description}>events, sign up for services and watch your</Text></View>
          <View level={15}><Text style={styles.description}>points automatically tally up!</Text></View>
        </View>
      </View>

      <View style={[styles.slide, { backgroundColor: '#fff' }]}>
        <View style={styles.header}>
          <View>
            <Image style={{ width: 375, height: 480 }} source={require('./img/introduction/background/bk-image6.png')} />
          </View>
        </View>
        <View style={[styles.info, {paddingBottom: 80}]}>
          <View level={10}><Text style={[styles.title, {fontSize: 48, paddingBottom: 8}]}>VIEW YOUR PROGRESS</Text></View>
          <View level={15}><Text style={styles.description}>See your individual impact and personal</Text></View>
          <View level={15}><Text style={styles.description}>achievements as well as your community’s</Text></View>
          <View level={15}><Text style={styles.description}>activity for comparison and competition.</Text></View>
        </View>
      </View>

      <View style={[styles.slide, { backgroundColor: '#BDD5EF' }]}>
        <View style={styles.header}>
          <View style={{
            position: 'absolute',
            top: height * 0.1,
            left: -width/5,
          }} level={20}
          >
            <Image style={{ width: 95, height: 56}} source={require('./img/login/cloud1.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: height * 0.03,
            left: width * 0.07,
            alignItems: 'center',
          }} level={20}
          >
            <Image style={{ width: 191, height: 111 }} source={require('./img/login/cloud2.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: height * 0.14,
            left: 0,
            alignItems: 'center',
          }} level={20}
          >
            <Image style={{ width: 251, height: 85 }} source={require('./img/login/login-title.png')} />
          </View>
          <View style={{
            position: 'absolute',
            top: height * 0.22,
            left: -width/5,
            alignItems: 'center',
          }} level={20}
          >
            <TextInput placeholder="Email" color= '#5E8AA3' placeholderTextColor='#9B9B9B' textAlign='center' style={{height: 48, width: 295, borderColor: '#FFF', backgroundColor: '#FFF', borderWidth: 1, borderRadius: 4, fontSize: 14}}/>
          </View>
          <View style={{
            position: 'absolute',
            top: height * 0.22 + 26,
            left: -width/5,
            alignItems: 'center',
          }} level={20}
          >
            <TextInput placeholder="Password" color= '#5E8AA3' SecureTextEntry placeholderTextColor='#9B9B9B' textAlign='center' style={{height: 48, width: 295, borderColor: '#FFF', backgroundColor: '#FFF', borderWidth: 1, borderRadius: 4, fontSize: 14}}/>
          </View>
          <View style={{
            position: 'absolute',
            top: height * 0.22 + 26 * 2,
            left: -width/5,
            alignItems: 'center',
          }} level={20}
          >
            <TextInput placeholder="Community Code" color= '#5E8AA3' placeholderTextColor='#9B9B9B' textAlign='center' style={{height: 48, width: 295, borderColor: '#FFF', backgroundColor: '#FFF', borderWidth: 1, borderRadius: 4, fontSize: 14}}/>
          </View>
          <View style={{
            position: 'absolute',
            top: height * 0.22 + 26 * 3 + 10,
            left: -1,
            alignItems: 'center',
          }} level={20}
          >
            <Button
              containerStyle={{width:295, height:40, overflow:'hidden', borderRadius:4, backgroundColor:'#82CCBE', flexDirection:'row', alignItems:'center', justifyContent:'center'}}
              style={{fontSize:14, color:'#FFF'}}
              onPress={() => this.loginBtnHandle('TAB_NAVIGATOR')}>
              Submit
            </Button>
          </View>
        </View>
        <View style={styles.info}>
          <View level={15}><Text style={styles.description}>Didn’t get the email?</Text></View>
          <View level={15}>
            <Button
              containerStyle={{overflow:'hidden', borderRadius:4, flexDirection:'row', alignItems:'center', justifyContent:'center'}}
              style={{fontSize:12, textDecorationLine:'underline', fontWeight:'bold', color:'#5E8AA3'}}
              onPress={() => this.contactUsBtnHandle()}>
              Contact Us.
            </Button>
          </View>
        </View>
      </View>
      </AppIntro>
    );
  }
}

function MilkcrateNavigator() {
  function renderScene({ name }, navigator) {
    if (name == 'INDEX') {
      return (<Milkcrate navigator={navigator}/>);
    }
    else if (name == 'TAB_NAVIGATOR') {
      return (<TabNavigatorView navigator={navigator}/>);
    }
  }
  function configureScene() {
    let config = Navigator.SceneConfigs.PushFromRight;
    config.gestures = {};
    return config;
  }
  return (
    <Navigator
      initialRoute={{name: 'INDEX'}}
      renderScene={renderScene}
      configureScene={configureScene}
      style={{flex: 1}}
    />
  );
}

AppRegistry.registerComponent('Milkcrate', () => MilkcrateNavigator);
