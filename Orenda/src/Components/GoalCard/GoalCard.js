import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native'
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Metrics, Fonts, Images, Locale } from 'Themes'
import { Button, TextInput, EncriptionMessage } from 'Components'
import styles from './GoalCardStyles'


export default class GoalCard extends Component {
    constructor(props){
        super(props);
            
        this.state = {
            progress:(this.props.curPrice / this.props.totalPrice).toFixed(2)
         }
            
    }

    render() {  	        
        return (
            <View style={[styles.myGoal, {width:Metrics.screenWidth - 20, alignItems:'center', marginLeft:10, marginRight:10}]}>
                <Image 
                    style={{width:Metrics.screenWidth - 20, height:104}} source={this.props.imgSource}>
                </Image>  
                <View style={{flexDirection:'row', paddingTop:9.5, width:Metrics.screenWidth - 56}}>
                    <Text style={[styles.textContent, {width:(Metrics.screenWidth - 56) / 2,textAlign:'left', fontSize:8, marginLeft:0, marginRight:0}]}>
                        {Locale.t("Saved ") + "$" + this.props.curPrice + " of " + "$" + this.props.totalPrice}
                    </Text>  
                    <Text style={[styles.textContent, {width:(Metrics.screenWidth - 56) / 2,textAlign:'right', fontSize:8, marginLeft:0}]}>
                        {this.props.progress * 100 + '% ' + Locale.t("complete")}
                    </Text>  
                </View> 
                <View style={{paddingTop: 10, paddingBottom:11}}>
                    <Progress.Bar 
                        progress={parseFloat(this.props.progress)} 
                        width={Metrics.screenWidth - 56}
                        height={1}
                        color={Colors.progressColor} />                                
                </View>
                <View style={{top:10,left:15, position:'absolute'}}>
                    <TouchableHighlight  onPress={() => {
                        this.props.onCustomPress()
                    }}>
                        <LinearGradient 
                            start={{x: 0, y: 1}} end={{x: 1.0, y: 1.0}}
                            colors={[Colors.gradientStartColor, Colors.gradientEndColor]} style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                {Locale.t(this.props.btnText).toUpperCase()}
                            </Text>
                        </LinearGradient>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}