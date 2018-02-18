import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Button, Text } from 'native-base';
import styles from './ButtonStyles'

export default class MyButton extends Component {
  constructor(props){
    super(props);
		
    this.state = { 
      text: ''
    };
		
  }

  render() {
  		buttonStyle = StyleSheet.flatten(styles.button);
  		textStyle = StyleSheet.flatten(styles.text);
  		if (this.props.transparent){
  			buttonStyle = StyleSheet.flatten(styles.buttonTransparent);
  			textStyle = StyleSheet.flatten(styles.textTransparent);
  		}
  		if (this.props.block){
  			buttonStyle = StyleSheet.flatten(styles.buttonWide);
  			textStyle = StyleSheet.flatten(styles.textWide);
  		}

			if (this.props.goal){
				buttonStyle = StyleSheet.flatten(styles.buttonGoal);
				textStyle = StyleSheet.flatten(styles.textGoal);
			}
		

			if(this.props.inactive){
				buttonStyle = StyleSheet.flatten(styles.inactive);
				if(this.props.goal){
					buttonStyle = StyleSheet.flatten(styles.inactiveGoal);
				}
			}
			
    return (
			<Button style={buttonStyle} {...this.props} >
          <Text style={textStyle}>{this.props.children}</Text>
			</Button>
    );
  }
}