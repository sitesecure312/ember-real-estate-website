import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from 'AppComponents';
import { NumericSelector, ContactSelector } from 'ReduxSelectors';
import { EventActions, ContactActions } from 'ReduxActions';
import { BLACK, OFF_WHITE, GRAY, WHITE } from 'AppColors';
import SearchResultContact from './SearchResultContact';
import SearchResultEvent from './SearchResultEvent';

const styles = StyleSheet.create({
  pageContainer: {
    flex           : 1,
    backgroundColor: BLACK,
    paddingTop     : 20
  },
  wrapper: {
    flex           : 1,
    backgroundColor: OFF_WHITE
  },
  listContainer: {
    flex        : 1,
    marginBottom: 5
  },
  topSearchBarArea: {
    margin        : 20,
    height        : 66 / 2,
    flexDirection : 'row',
    alignItems    : 'center',
    justifyContent: 'flex-start',
  },
  searchBarWrapper: {
    flex           : 1,
    height         : 40,
    marginRight    : 20,
    borderRadius   : 3,
    borderWidth    : 0.5,
    borderColor    : GRAY,
    overflow       : 'hidden',
    flexDirection  : 'row',
    alignItems     : 'center',
    justifyContent : 'flex-start',
    backgroundColor: WHITE
  },
  input: {
    flex             : 1,
    marginLeft       : 20,
    textAlignVertical: 'center',
    marginBottom     : -5
  },
  iconSearch: {
    width : 25,
    height: 25,
    left  : 10
  },
  iconAdd: {
    width : 40,
    height: 40,
  },
  navLeft: {
    width     : 20,
    marginLeft: 3,
    flex      : 1
  }
});

class SearchScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText     : '',
      flagShowContact: false
    };
  }

  onPressBack() {
    this.props.navigator.pop();
  }

  renderListingContainer(pageType) {
    if (pageType === 1) {
      return (
        <ScrollView style={styles.listContainer} automaticallyAdjustContentInsets={false}>
          <SearchResultContact
            keyword={this.state.searchText}
            flagShowContact={this.state.flagShowContact}
            {...this.props}
          />
        </ScrollView>
      );
    } else if (pageType === 2) {
      return (
        <ScrollView style={styles.listContainer} automaticallyAdjustContentInsets={false}>
          <SearchResultEvent
            keyword={this.state.searchText}
            flagShowContact={this.state.flagShowContact}
            {...this.props}
          />
        </ScrollView>
      );
    }
  }

  onSearch(pageType, text) {
    if (pageType === 1) {
      this.props.dispatch(ContactActions.searchContact(text));
    } else if (pageType === 2) {
      this.props.dispatch(EventActions.searchEventByCity('Las Vegas'));
    }
  }

  renderAddIcon(pageType) {
    if (pageType === 1) {
      return (
        <TouchableOpacity onPress={() => this.setState({ flagShowContact: true })}>
          <Image style={styles.iconAdd} source={require('img/icon_add.png')} />
        </TouchableOpacity>
      );
    }
  }

  render() {
    let placeholder = '';
    let pageType = 0;

    let navTitlePrefix = '';
    if (this.props.name === 'searchContactPage') {
      placeholder = 'search for player...';
      pageType = 1;
    }
    if (this.props.name === 'searchEventPage') {
      navTitlePrefix = ` To ${this.props.selectedContact.name}`;
      placeholder = 'search for event...';
      pageType = 2;
    }
    return (
      <View style={styles.pageContainer}>
        <NavBar
          leftImage={require('img/icon_back.png')}
          leftIconStyle={styles.navLeft}
          navTitlePrefix={navTitlePrefix}
          onLeftPress={() => this.onPressBack()}
          {...this.props}
        />
        <View style={styles.wrapper}>

          <View style={styles.topSearchBarArea}>
            <View style={styles.searchBarWrapper}>
              <Image style={styles.iconSearch} source={require('img/icon_search.png')} />
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                clearButtonMode="never"
                returnKeyType="search"
                onChangeText={text => this.onSearch(pageType, text)}
                onSubmitEditing={() => {}
                }
              />
            </View>
            {this.renderAddIcon(pageType)}
          </View>
          {this.renderListingContainer(pageType)}
        </View>
      </View>
    );
  }
}

export default connect(NumericSelector.numeric$)(
  connect(ContactSelector.selectedContact$)(SearchScene)
);