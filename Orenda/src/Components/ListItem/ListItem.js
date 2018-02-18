import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'
import { ListItem, Text, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ListItemStyles'
import { Colors, Metrics, Fonts, Images } from 'Themes'

export default class MyListItem extends Component {
    constructor(props){
        super(props);
            
        this.state = { 
            text: ''
        };
            
    }

    render() {  	
        itemStyle = StyleSheet.flatten(styles.defaultItem);
        textStyle = StyleSheet.flatten(styles.defaultText);        
        return (
            <ListItem style={itemStyle} {...this.props}>
                <Image style={{marginLeft:5, width:85 * Metrics.scaleWidth, height:85 * Metrics.scaleWidth}} source={Images.item_icon} />
                <Text style={textStyle}>{this.props.children}</Text>                
            </ListItem>
        );
    }
}