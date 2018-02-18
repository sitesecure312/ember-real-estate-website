/**
 * Created by baebae on 4/5/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { EventActions, ContactActions } from 'ReduxActions';
import { ContactSelector } from 'ReduxSelectors';
import { DARK_GRAY } from 'AppColors';

const colorSelected = '#77CCA4';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex         : 1,
  },
  listview: {
    flex: 1
  },
  contactInfoContainer: {
    flex          : 1,
    justifyContent: 'center',
    alignItems    : 'center',
  },
  itemBlock: {
    flex           : 1,
    margin         : 10,
    marginVertical : 5,
    padding        : 4,
    backgroundColor: '#D8D8D8',
    borderColor    : '#979797',
    borderWidth    : 1,
    borderRadius   : 10,
    justifyContent : 'center',
    alignItems     : 'center',
  },
  itemName: {
    fontSize: 15,
    color   : DARK_GRAY,
  },
});
class SearchResultContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      dataSource   : new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  onSelectRow(selectedIndex, name) {
    const selectedContact = { name };
    this.setState({ selectedIndex });
    this.props.dispatch(ContactActions.udpateSelectedContact(selectedContact));
    this.props.dispatch(EventActions.searchEventByCity('Las Vegas'));
    this.props.navigator.push({ name: 'SearchScene', passProps: { name: 'searchEventPage' } });
  }

  getName(contactItem) {
    let ret = '';
    if (contactItem.familyName) {
      ret = contactItem.familyName;
    }
    if (contactItem.middleName) {
      ret = `${ret} ${contactItem.middleName}`;
    }
    if (contactItem.givenName) {
      ret = `${ret} ${contactItem.givenName}`;
    }

    return ret;
  }
  searchContact() {
    const ret = [];
    _.forEach(this.props.contacts, (contactInfo) => {
      const name = this.getName(contactInfo).toLowerCase();
      const { keyword } = this.props;
      if (keyword.length === 0 || name.indexOf(keyword.toLowerCase()) !== -1) {
        ret.push(contactInfo);
      }
    });
    return ret;
  }

  renderSearchResultListView() {
    const contact = this.searchContact();
    const dataSource = this.state.dataSource.cloneWithRows(contact);
    const dataSource1 = this.state.dataSource.cloneWithRows(this.props.searchResult);
    if (this.props.flagShowContact && contact.length > 0 ) {
      return (
        <ListView
          style={styles.listview}
          dataSource={dataSource}
          renderRow={(item, sectionID, rowID) => this.renderContactRow(item, sectionID, rowID)}
        />
      );
    }
    if (this.props.searchResult.length > 0) {
      return (
        <ListView
          style={styles.listview}
          dataSource={dataSource1}
          renderRow={(item, sectionID, rowID) => this.renderSearchResultRow(item, sectionID, rowID)}
        />
      );
    }
    return <View />;
  }

  renderListView() {
    return (
      <View style={styles.container}>
        {this.renderSearchResultListView()}
      </View>
    );
  }

  renderValue(index, value) {
    if (value && value.length > 0) {
      return (
        <Text key={index} style={styles.itemName}>{value}</Text>
      );
    }
    return <View />;
  }

  renderContactPhoneNumber(contactItem) {
    let index = 0;
    return _.map(contactItem.phoneNumbers, (phoneInfo) => {
      const txtInfo = `${phoneInfo.label} ${phoneInfo.number}`;
      index += 1;
      return this.renderValue(index, txtInfo);
    });
  }

  renderContactMail(contactItem) {
    let index = 0;
    return _.map(contactItem.emailAddresses, (emailInfo) => {
      index += 1;
      const txtInfo = `${emailInfo.label} ${emailInfo.email}`;
      return this.renderValue(index, txtInfo);
    });
  }

  renderContactRow(item, sectionID, rowID) {
    const name = this.getName(item);
    let rowStyle = styles.itemBlock;
    if (rowID === this.state.selectedIndex) {
      rowStyle = [styles.itemBlock, { backgroundColor: colorSelected }];
    }
    return (
      <TouchableHighlight
        style={rowStyle}
        underlayColor={colorSelected}
        onPress={() => this.onSelectRow(rowID, name)}
      >
        <View style={styles.contactInfoContainer}>
          <Text style={styles.itemName}>{name}</Text>
          {this.renderContactPhoneNumber(item)}
          {this.renderContactMail(item)}
        </View>

      </TouchableHighlight>
    );
  }

  renderSearchPhoneNumbers(item) {
    let index = 0;
    return _.map(item.secondary_numbers, (number) => {
      index += 1;
      return this.renderValue(index, number);
    });
  }

  renderSearchMails(item) {
    let index = 0;
    return _.map(item.secondary_emails, (email) => {
      index += 1;
      return this.renderValue(index, email);
    });
  }

  renderSearchResultRow(item, sectionID, rowID) {
    console.info('render', item);
    const name = item.username;
    let rowStyle = styles.itemBlock;
    if (rowID === this.state.selectedIndex) {
      rowStyle = [styles.itemBlock, { backgroundColor: colorSelected }];
    }
    return (
      <TouchableHighlight
        style={rowStyle}
        underlayColor={colorSelected}
        onPress={() => this.onSelectRow(rowID, name)}
      >
        <View style={styles.contactInfoContainer}>
          <Text style={styles.itemName}>{name}</Text>
          {this.renderValue(0, item.number)}
          {this.renderValue(1, item.email)}
          {this.renderSearchPhoneNumbers(item)}
          {this.renderSearchMails(item)}
        </View>

      </TouchableHighlight>
    );
  }
  render() {
    return this.renderListView();
  }
}


export default connect(ContactSelector.contact$)(SearchResultContact);
