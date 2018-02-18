import React, { Component } from 'react';
import { StyleSheet, Picker } from 'react-native'
import styles from './DataPickerStyles'

export default class DataPicker extends Component {
  constructor(props){
    super(props);
		
    this.state = { 
      selectedService: this.props.selectedVal
    };
		
  }

  render() {
    sizeStyle = StyleSheet.flatten(styles.picker);
    if (this.props.personal){
      sizeStyle = StyleSheet.flatten(styles.personal);
    }
    let serviceItems = this.props.children.map((s, i)=>{
      return <Picker.Item key={i} value={s} label={s} />
    });
      return (        
          <Picker style={sizeStyle}         
              selectedValue={this.state.selectedService}
              onValueChange={(service)=>{
                this.setState({selectedService:service});
                this.props.onValueCustomChange(service);
              }}              
              >
              {serviceItems}
          </Picker>
      );
  }
}