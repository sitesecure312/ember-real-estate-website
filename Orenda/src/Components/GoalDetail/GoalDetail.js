import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput, EncriptionMessage } from 'Components'
import styles from './GoalDetailStyles'


export default class GoalDetail extends Component {
    constructor(props){
        super(props);
            
        
            
    }

    render() {  	        
        return (
            <View style={styles.center}>
                <View style={{flexDirection:'row', paddingTop:15, width: Metrics.screenWidth - 20}}>
                    <Text style={[styles.textContent, {width:'auto', fontSize:10, marginLeft:18}]}>
                        {Locale.t("Goal image")}
                    </Text> 
                    <View style={{width: Metrics.screenWidth - 167}}/>
                    <TouchableOpacity  onPress={() => {
                        alert("Change image");
                      }}>
                        <Text style={[styles.textContent, {width:'auto', fontSize:10, color:Colors.primary}]}>
                            {Locale.t("Change image")}
                        </Text>
                    </TouchableOpacity>                                       
                </View>
                <View style={{paddingTop:7.5}}/>
                <Image 
                    style={{width:Metrics.screenWidth - 56, height:135}} source={this.props.imgSource}>
                </Image>  
                <View style={{paddingTop:11}}/>
                <Text style={[styles.textContent, {marginLeft:0, marginRight:0, textAlign:'left', fontSize:10, width: Metrics.screenWidth - 56}]}>
                    {Locale.t("Goal title")}
                </Text> 
                <View style={{flexDirection:'row', paddingTop:4, width: Metrics.screenWidth - 20}}>
                    <Text style={[styles.textCaption, {width:Metrics.screenWidth - 100, textAlign:'left', marginLeft:18, marginRight:0, fontSize:15}]}>
                        {this.props.title}
                    </Text> 
                    <Image 
                        style={{width:19, height:19}} source={Images.edit}>
                    </Image> 
                    <View style={{width:3}}/> 
                    <Image 
                        style={{width:19, height:19}} source={Images.alertflag}>
                    </Image>
                </View>
                <View style={{paddingTop:20}} />
                <Text style={[styles.textContent, {marginLeft:0, marginRight:0, textAlign:'left', fontSize:10, width: Metrics.screenWidth - 56}]}>
                    {Locale.t("Goal amount")}
                </Text> 
                <View style={{flexDirection:'row', paddingTop:4, width: Metrics.screenWidth - 20}}>
                    <Text style={[styles.textCaption, {width:Metrics.screenWidth - 100, textAlign:'left', marginLeft:18, marginRight:0, fontSize:15}]}>
                        {"$" + this.props.amount}
                    </Text> 
                    <Image 
                        style={{width:19, height:19}} source={Images.edit}>
                    </Image> 
                    <View style={{width:3}}/> 
                    <Image 
                        style={{width:19, height:19}} source={Images.alertflag}>
                    </Image>
                </View>
                <View style={{paddingTop:22}}/>
            </View>
        );
    }
}