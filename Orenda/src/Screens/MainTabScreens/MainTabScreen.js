import React, { Component } from 'react';
import { Text, Image, View, Platform, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
import Tabs from 'react-native-tabs'
import IconBadge from 'react-native-icon-badge';
import styles from './MainTabScreensStyles';
import { Images, Metrics, Colors } from 'Themes'
import { Button, TextInput, ListItem } from 'Components'

import * as firebase from 'firebase';

import DeviceScreen from './DeviceScreen';
import ExploreScreen from './ExploreScreen';
import CommunityScreen from './CommunityScreen';
import MeScreen from './MeScreen';

export default class MainTabScreen extends React.Component {
    static navigatorStyle = {
        navBarTextFontFamily:'Futura Heavy',
        navBarNoBorder:true,
        navBarTitleTextCentered: true
    };

    constructor(props){
        super(props);  
        this.state = {
            page:'device',
            badge:2,
        }  
    }

    render () {

        return (
            <View style={styles.container}>
                { 
                    this.state.page == 'device' && 
                        <DeviceScreen navigator={this.props.navigator} badge={this.state.badge} />
                }
                { 
                    this.state.page == 'explore' && 
                        <ExploreScreen navigator={this.props.navigator}/>
                }
                { 
                    this.state.page == 'community' && 
                        <CommunityScreen navigator={this.props.navigator}/>
                }
                { 
                    this.state.page == 'me' && 
                        <CommunityScreen navigator={this.props.navigator}/>
                }
                
                <Tabs selected={this.state.page} style={[styles.tabStyle, {}]}
                    selectedStyle={styles.activeTextStyle} onSelect={(el)=>{
                        this.setState({page:el.props.name})
                    }}>
                    
                    <Text name="device" style={styles.textStyle}>DEVICE</Text>
                    <Text name="explore" style={styles.textStyle}>EXPLORE</Text>
                    <Text name="community" style={styles.textStyle}>COMMUNITY</Text>
                    <Text name="me" style={styles.textStyle}>ME</Text>
                </Tabs>
                {
                    this.state.badge > 0 && 
                        <View style={[styles.badgeStyle, {alignItems:'center', bottom:30, left:Metrics.screenWidth / 4 - 60 * Metrics.scaleWidth}]}>
                            <Text style={{paddingTop:2, fontFamily:'Futura Medium', color:'#fff', fontSize:12, textAlign: 'center'}}>{this.state.badge}</Text>
                        </View>

                }
            </View>
        )
    }

}