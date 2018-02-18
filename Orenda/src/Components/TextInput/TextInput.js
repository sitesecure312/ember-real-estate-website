import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Item, Label, Input } from 'native-base';
import { Colors, Metrics } from 'Themes'
import styles from './TextInputStyles'

export default class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:''
    }
  } 

  render() {
  
  	sizeStyle = {};
  	if (this.props.wide)
  		sizeStyle = StyleSheet.flatten(styles.wide);

    labelStyle = StyleSheet.flatten(styles.label)
    inputStyle = StyleSheet.flatten(styles.input)

    if (this.props.amount){
      sizeStyle = StyleSheet.flatten(styles.amount);
      inputStyle = StyleSheet.flatten(styles.amountInput)
    }

    if(this.props.goal)
    {
      sizeStyle = StyleSheet.flatten(styles.goal);
      labelStyle = StyleSheet.flatten(styles.goalCreateLabel)
      inputStyle = StyleSheet.flatten(styles.goalCreateInput)
    }
    if(this.props.personal){
      sizeStyle = StyleSheet.flatten(styles.personal);
    }

    return (      
      <Item floatingLabel style={sizeStyle}>
        <Label style={labelStyle}>{this.props.children}</Label>
        <Input style={inputStyle}
          placeholder={this.props.placeholder ? this.props.placeholder : ''}
          editable={this.props.editable ? false : true}
          autoCorrect={false}
          autoFocus={this.props.autoFocus ? true : false}
          secureTextEntry={this.props.secureText}
          onChangeText={(text)=>{
            this.props.onChangeValue(text)
          }}
          keyboardType={this.props.type ? this.props.type : 'default'}     
          onFocus={()=>{
            this.props.onCustomFocus()
          }}  
        />
      </Item>
    );
  }

}
