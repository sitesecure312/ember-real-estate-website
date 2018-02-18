import React, { Component } from 'react';
import { StyleSheet  } from 'react-native'
import DatePicker from 'react-native-datepicker'
import styles from './DatePickerStyles'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props);
		
		
  }

  render() {   
      return (
          <DatePicker
            style={{width: this.props.width, marginLeft:this.props.marginLeft, marginRight:this.props.marginRight}}
            date={this.props.defaultDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"            
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {
              this.props.onDateChange(date);              
            }}
          />
      );
  }
}