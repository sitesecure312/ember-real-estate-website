import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { NumericSelector, AccountSelector, ContactSelector, EventSelector } from 'ReduxSelectors';
import { Api } from 'AppServices';
import { GRAY, BLACK, OFF_WHITE, WHITE } from 'AppColors';

const styles = StyleSheet.create({
  pageContainer: {
    flex           : 1,
    backgroundColor: BLACK,
    paddingTop     : 20
  },
  topIconContainer: {
    position     : 'absolute',
    flexDirection: 'column',
    top          : 15,
    right        : 15,
    width        : 20,
    height       : 20,
    alignSelf    : 'stretch',
  },
  editIcon: {
    width : 20,
    height: 20,
  },
  eventContainer: {
    height           : 90,
    marginTop        : 40,
    flexDirection    : 'row',
    marginHorizontal : 20,
    paddingHorizontal: 8,
    backgroundColor  : WHITE,
    borderWidth      : 1,
    borderColor      : GRAY,
    alignItems       : 'center'
  },
  eventIcon: {
    width    : 80,
    height   : 80,
    marginTop: 3,
  },
  wrapper: {
    flex           : 1,
    flexDirection  : 'column',
    backgroundColor: OFF_WHITE
  },
  textArea: {
    flex             : 1,
    marginTop        : 20,
    marginHorizontal : 20,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    borderWidth      : 1,
    borderColor      : GRAY,
    color            : GRAY,
    backgroundColor  : OFF_WHITE
  },
  nameText: {
    marginTop       : 10,
    marginHorizontal: 20,
    fontSize        : 20,
    height          : 20,
    lineHeight      : 20,
    color           : GRAY,
    textAlign       : 'center'
  },
  priceText: {
    fontSize  : 40,
    height    : 40,
    lineHeight: 40,
  },
  eventText: {
    height    : 20,
    marginTop : 3,
    fontSize  : 16,
    lineHeight: 20,
  },
  labelTo: {
    marginTop       : 5,
    height          : 15,
    lineHeight      : 15,
    marginHorizontal: 20,
    fontSize        : 14,
    color           : GRAY,
    textAlign       : 'center'
  },
  sep: {
    marginTop       : 20,
    height          : 1.5,
    backgroundColor : '#9D646E',
    marginHorizontal: 50,
  },
  bottom: {
    flex          : 1,
    marginBottom  : 30,
    alignSelf     : 'stretch',
    flexDirection : 'row',
    alignItems    : 'flex-end',
    justifyContent: 'center'
  },
  buttonArea: {
    flex            : 1.5,
    marginHorizontal: 20,
    height          : 80,
    alignItems      : 'center',
    justifyContent  : 'center',
  },
  button: {
    marginTop      : 10,
    flex           : 1,
    borderWidth    : 1,
    alignSelf      : 'stretch',
    height         : 30,
    borderRadius   : 6,
    borderColor    : GRAY,
    backgroundColor: '#77CCA4',
    alignItems     : 'center',
    justifyContent : 'center'
  },
});

class CreateContractScene extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.createTestContract = this.createTestContract.bind(this);
    this.onPressBack = this.onPressBack.bind(this);
  }

  onPressBack() {
  }

  createTestContract() {
    const contract = {
      offering_money : this.props.user.name,
      receiving_money: this.props.selectedContact.name,
      created_by     : this.props.user.name,
      date_created   : new Date(),
      verified_at    : new Date(),
      type           : '',
      currency       : this.props.numericCurrencyType,
      comments       : this.state.comment,
      event_name     : this.props.selectedEvent.event_name,
    };

    if (this.props.numericType === 'Swap') {
      contract.type = 'swap';
      contract.swap = { amount: this.props.numericValue };
    }

    if (this.props.numericType === 'Stake') {
      contract.type = 'stake';
      contract.stake = {
        amount      : this.props.numericValue,
        amount_title: this.props.numericCurrencyType + this.props.numericValue,
        currency    : this.props.numericCurrencyType,
        event_name  : this.props.selectedEvent.event_name,
      };
    }

    if (this.props.numericType === 'Transfer') {
      contract.type = 'loan';
      contract.loan = {
        amount    : this.props.numericValue,
        event_name: this.props.selectedEvent.event_name,
      };
    }

    Api.contract.create(null, contract)
      .then((res) => {
        console.info('create result: ', res);
        this.onPressBack();
      });
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.wrapper}>

          <Text style={styles.nameText}>{this.props.user.name}</Text>

          <Text style={styles.labelTo}>To</Text>

          <Text style={styles.nameText}>{this.props.selectedContact.name}</Text>

          <View style={styles.sep} />

          <Text style={styles.labelTo}>{this.props.numericType}</Text>

          <Text style={[styles.nameText, styles.priceText]}>
            {`${this.props.numericCurrencyType} ${this.props.numericValue}`}
          </Text>
          <Text style={styles.labelTo}>due</Text>
          <Text style={[styles.nameText, styles.priceText]}>7-1-16</Text>
          <Text style={styles.labelTo}>event</Text>

          <View style={styles.eventContainer}>
            <Image
              style={styles.eventIcon}
              source={require('img/icon_wsop.png')}
              resizeMode={Image.resizeMode.contain}
            />
            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8 }}>
              <Text style={styles.eventText}>
                {`${this.props.selectedEvent.event_brand} ${this.props.selectedEvent.city}`}
              </Text>
              <Text style={[styles.eventText, { color: GRAY }]}>
                {`Date: ${this.props.selectedEvent.date_string}`}
              </Text>
              <Text style={[styles.eventText, { color: GRAY }]}>
                {`Event: ${this.props.selectedEvent.event_name}`}
              </Text>
            </View>
          </View>

          <View style={{ height: 90, marginTop: 20 }}>
            <TextInput
              style={styles.textArea}
              placeholder="add comment here"
              multiline={true}
              value={this.state.comment}
              clearButtonMode="never"
              onChangeText={comment => this.setState({ comment })}
              onSubmitEditing={() => {}
              }
            />
          </View>

          <View style={styles.bottom}>
            <View style={styles.buttonArea}>
              <TouchableOpacity style={styles.button} onPress={this.createTestContract}>
                <Text style={{ color: WHITE }}>Send & Save </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={this.createTestContract}>
                <Text style={{ color: WHITE }}>Just Save </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.topIconContainer}>
            <TouchableOpacity onPress={this.onPressBack} >
              <Image
                style={styles.editIcon}
                source={require('img/icon_edit.png')}
                resizeMode={Image.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export const selector$ =
  createSelector(NumericSelector.numericType$, NumericSelector.numericValue$,
    NumericSelector.numericCurrencyType$, AccountSelector.token$, AccountSelector.user$,
    ContactSelector.selectedContact$$, EventSelector.selectedEvent$$,
    (numericType, numericValue, numericCurrencyType, token, user, selectedContact, selectedEvent) => ({
      numericType, numericValue, numericCurrencyType, token, user, selectedContact, selectedEvent
    })
  );
export default connect(selector$)(CreateContractScene);