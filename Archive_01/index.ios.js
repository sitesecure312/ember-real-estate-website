/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import ResponsiveImage from 'react-native-responsive-image';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
var screenDimenssion = Dimensions.get('window');
// Import the react-native-sound module
var Sound = require('react-native-sound');
var scaleHeight = (530 * (screenDimenssion.height/736));
var scaleWidth = (22 * (screenDimenssion.width / 414));
// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.

var bell = new Sound('meditationstart.aif', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
  } else { // loaded successfully
    console.log('duration in seconds: ' + bell.getDuration() +
        'number of channels: ' + bell.getNumberOfChannels());
  }
});

// Play the sound with an onEnd callback
bell.play((success) => {
  if (success) {
    console.log('successfully finished playing');
    
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {playing: false, index: 0, time: '5:00'};
    var images = ["./img/kamalashila_meditations-01.jpg"];
    this.state.images = images;
    this.state.currentImage = images[0];
    // alert(screenDimenssion.height);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
        Meditation For The Rest Of Your Life
        </Text>
        <View style={styles.swipeWrapper}>
        <Swiper height={scaleHeight}
          showsButtons={false}
          showsPagination={true}
          paddingTop = {10}
          style={styles.wrapper} >
          <View style={styles.slide1}>
             <Image
               // width={200}
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-01.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-02.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-03.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-04.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-05.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-06.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-07.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-08.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-09.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-10.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-11.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-12.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-13.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-14.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-15.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-16.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-17.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-18.jpg")}></Image>
           </View>
           <View style={styles.slide1}>
           <Image
               resizeMode="contain"
               style={styles.coverImage} source={require("./img/death-meditations-19.jpg")}></Image>
           </View>
           <View style={styles.slide3}>
             <Text style={styles.text}>And simple</Text>
           </View>
         </Swiper>
        </View>
        <Text style={styles.timer}>
          { this.state.time }
        </Text>
        <View style={styles.buttonBar}>
          <TouchableOpacity onPress={this.doTimer.bind(this)}>
            <Icon name={this.state.playing ? 'stop' : 'play'} size={45 * (screenDimenssion.width / 414)} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  doTimer() {
    console.log('timer');
    bell.play();
    console.log(this.state.playing);
    this.setState({playing: !this.state.playing}, function() {
      var self = this;
      console.log(this.state.playing);
      if(!this.state.playing) {
        clearInterval(self.set);
      }
      else if(this.state.playing) {
        var fiveMinutes = 60*5;
        var duration = fiveMinutes;
        var timer = duration, minutes, seconds;
        console.log('starting');
        self.set = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            //minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            self.setState({time: minutes + ':' + seconds});
            console.log(self.state.time);

            if (--timer < 0) {
                timer = duration;
                bell.play();
                clearInterval(self.set);
                self.setState({playing:false});
            }
        }, 1000);
      }
    });
  }

  startTimer(duration, display) {

  }

}

const styles = StyleSheet.create({
  swipeWrapper: {
    height:scaleHeight,
    margin:0,
    paddingTop:10
    //top:50,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,
    padding: 0
    //backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0
    //backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
    margin:0
    //backgroundColor: '#92BBD9',
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  header: {
    top: 60,
    fontSize: scaleWidth,
    fontWeight: 'bold'
  },
  buttonBar: {
    flexDirection: 'row',
    margin: 10
  },
  buttonBarSpacer: {
    fontSize: 40
  },
  coverImage: {
    flex:1,
    margin:0,
    padding:0,
    width: (screenDimenssion.width * 1.1)
  },
  timer: {
    fontSize: (30 * (screenDimenssion.width / 414)),
    textAlign: 'center',
    margin: 20,
  },
});

AppRegistry.registerComponent('Archive', () => Archive);
