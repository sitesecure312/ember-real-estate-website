/**
 * Created by baebae on 4/5/16.
 */
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
import { NavBar } from 'AppComponents';
import { Api } from 'AppServices';
import { GRAY, BLACK, WHITE, OFF_WHITE } from 'AppColors';
import ContactArea from './ContactArea';
import PayArea from './PayArea';

const styles = StyleSheet.create({
  pageContainer: {
    flex           : 1,
    backgroundColor: BLACK,
    paddingTop     : 20
  },
  wrapper: {
    flex           : 1,
    flexDirection  : 'column',
    backgroundColor: OFF_WHITE
  },
  input: {
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
  textArea: {
    flex             : 1,
    marginTop        : 20,
    marginHorizontal : 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    borderWidth      : 1,
    borderColor      : GRAY,
    color            : GRAY,
    backgroundColor  : OFF_WHITE
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
    width          : 140,
    borderWidth    : 1,
    height         : 30,
    borderRadius   : 6,
    borderColor    : GRAY,
    backgroundColor: OFF_WHITE,
    alignItems     : 'center',
    justifyContent : 'center'
  },
  confirmIconArea: {
    marginRight    : 20,
    width          : 80,
    height         : 80,
    borderColor    : GRAY,
    backgroundColor: OFF_WHITE,
    alignItems     : 'center',
    justifyContent : 'center',
    borderWidth    : 1,
    borderRadius   : 60
  },
  confirmIcon: {
    width : 41,
    height: 35,
  }
});

class ContractOverViewScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment        : '',
      flagShowContact: false
    };
    this.contactArea = null;
    this.onPressBack = this.onPressBack.bind(this);
    this.createContract = this.createContract.bind(this);
  }

  onPressBack() {
    this.props.navigator.pop();
  }

  createContract() {
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

    if (this.contactArea.getReverseState()) {
      contract.offering_money = this.props.selectedContact.name;
      contract.receiving_money = this.props.user.name;
    }

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
    const currentUser = this.props.user;
    const selectedUser = this.props.selectedContact;

    const eventInfo = this.props.selectedEvent.event_name;
    return (
      <View style={styles.pageContainer}>
        <NavBar
          leftImage={require('image!icon_back')}
          leftIconStyle={{ width: 20, marginLeft: 3, flex: 1 }}
          onLeftPress={this.onPressBack}
          noNumericType={false}
          {...this.props}
        />
        <View style={styles.wrapper}>
          <ContactArea
            ref={ref => this.contactArea = ref}
            currentUser={currentUser}
            selectedUser={selectedUser}
            pageType={this.props.numericType}
          />
          <PayArea
            amount={this.props.numericValue}
            currencyType={this.props.numericCurrencyType}
            pageType={this.props.numericType}
          />
          <View style={{ height: 60 }}>
            <TextInput
              style={styles.input}
              value={eventInfo}
              clearButtonMode="never"
              onSubmitEditing={() => {}
              }
            />
          </View>

          <View style={{ height: 120 }}>
            <TextInput
              style={styles.textArea}
              multiline={true}
              clearButtonMode="never"
              value={this.state.comment}
              onChangeText={comment => this.setState({ comment })}
              onSubmitEditing={() => {}
              }
            />
          </View>

          <View style={styles.bottom}>
            <View style={styles.buttonArea}>
              <View style={styles.button}>
                <Text>Email / E-Sign</Text>
              </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <TouchableOpacity style={styles.confirmIconArea} onPress={this.createContract}>
                <Image style={styles.confirmIcon} source={require('img/icon_confirm.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export const selector$ = createSelector(NumericSelector.numericType$, NumericSelector.numericValue$,
  NumericSelector.numericCurrencyType$, AccountSelector.token$, AccountSelector.user$,
  ContactSelector.selectedContact$$, EventSelector.selectedEvent$$,
  (numericType, numericValue, numericCurrencyType, token, user, selectedContact, selectedEvent) => ({
    numericType, numericValue, numericCurrencyType, token, user, selectedContact, selectedEvent
  })
);
export default connect(selector$)(ContractOverViewScene);
