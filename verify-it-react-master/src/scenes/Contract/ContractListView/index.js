import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { UIActions } from 'ReduxActions';
import { WHITE, BLACK, GRAY, OFF_WHITE } from 'AppColors';
import SearchResultContract from './SearchResultContract';

const styles = StyleSheet.create({
  pageContainer: {
    flex           : 1,
    backgroundColor: BLACK,
    paddingTop     : 20
  },
  topBar: {
    flexDirection  : 'row',
    backgroundColor: 'black',
    height         : 35,
  },
  iconContainer: {
    justifyContent: 'center',
    flex          : 1,
    marginTop     : 5
  },
  icon: {
    width : 33,
    height: 28,
  },
  verificationTextContainer: {
    position       : 'absolute',
    backgroundColor: '#7ED321',
    width          : 18,
    height         : 18,
    borderRadius   : 9,
    right          : 2,
    top            : 0,
    justifyContent : 'center',
    alignItems     : 'center',
  },
  verificationText: {
    backgroundColor: 'transparent',
  },
  wrapper: {
    flex           : 1,
    marginTop      : 10,
    backgroundColor: OFF_WHITE
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
    borderWidth    : 1 / 2,
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
});

class ContractListViewScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword        : '',
      flagShowContact: false
    };
  }
  onSearch(keyword) {
    this.setState({ keyword });
  }

  gotoCreateContract() {
    this.props.navigator.pop();
  }

  renderTopBar() {
    return (
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.iconContainer, { marginLeft: 10 }]}
          onPress={() => this.props.dispatch(UIActions.updateSideMenu())}
        >
          <Image style={styles.icon} source={require('img/icon_menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconContainer, { alignItems: 'center', width: 50 }]}
          onPress={() => this.gotoCreateContract()}
        >
          <Image style={styles.icon} source={require('img/icon_clipboard.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.iconContainer, { alignItems: 'flex-end', marginRight: 10 }]}>
          <Image style={styles.icon} source={require('img/icon_verification.png')} />
          <View style={styles.verificationTextContainer}>
            <Text style={styles.verificationText}>12</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderListingContainer() {
    return (
      <SearchResultContract
        keyword={this.state.keyword}
        flagShowContact={this.state.flagShowContact}
        {...this.props}
      />
    );
  }
  render() {
    const placeholder = 'Search for contracts';

    return (
      <View style={styles.pageContainer}>
        {this.renderTopBar()}
        <View style={styles.wrapper}>
          <View style={styles.topSearchBarArea}>
            <View style={styles.searchBarWrapper}>
              <Image
                style={styles.iconSearch}
                source={require('img/icon_search.png')} />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder={placeholder}
                clearButtonMode="never"
                returnKeyType="search"
                onChangeText={text => this.onSearch(text)}
              />
            </View>
          </View>
          {this.renderListingContainer()}
        </View>
      </View>
    );
  }
}

export default connect()(ContractListViewScene);
