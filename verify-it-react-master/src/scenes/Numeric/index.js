import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { NumericSelector } from 'ReduxSelectors';
import { UIActions } from 'ReduxActions';
import { NavBar } from 'AppComponents';
import { BLACK } from 'AppColors';
import NumericPage from './NumericPage';

const styles = StyleSheet.create({
  pageContainer: {
    flex           : 1,
    backgroundColor: BLACK,
    paddingTop     : 20
  },
  wrapper: {
    flex           : 1,
    backgroundColor: '#797676',
  },
  topBar: {
    flexDirection  : 'row',
    backgroundColor: 'black',
    height         : 35,
  },
  nextButtonWrapper: {
    flexDirection  : 'row',
    alignSelf      : 'stretch',
    backgroundColor: '#3ADB76',
    height         : 61,
    alignItems     : 'center',
    justifyContent : 'center',
  },
  iconNext: {
    marginLeft: 15,
    width     : 32,
    height    : 24
  },
  txtNext: {
    fontSize    : 28,
    marginBottom: 3,
    color       : 'white'
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
  navLeftIconStyle: {
    width     : 20,
    marginLeft: 3,
    flex      : 1
  }
});

class NumericScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText    : '',
      selectedFilter: ''
    };
    this.onNextPress = ::this.onNextPress;
    this.gotoViewContracts = ::this.gotoViewContracts;
  }

  onNextPress() {
    this.props.navigator.push({ name: 'SearchScene', passProps: { name: 'searchContactPage' } });
  }

  gotoViewContracts() {
    this.props.navigator.push({ name: 'ContractListViewScene' });
    // Actions.viewContracts();
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
          onPress={this.gotoViewContracts}
        >
          <Image style={styles.icon} source={require('img/icon_clipboard.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconContainer, { alignItems: 'flex-end', marginRight: 10 }]}
        >
          <Image style={styles.icon} source={require('img/icon_verification.png')} />
          <View style={styles.verificationTextContainer}>
            <Text style={styles.verificationText}>12</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        {this.renderTopBar()}
        <NavBar
          leftImage={require('img/icon_back.png')}
          leftIconStyle={styles.navLeftIconStyle}
          {...this.props}
        />

        <View style={styles.wrapper}>
          <NumericPage {...this.props} />
        </View>

        <View style={{ backgroundColor: BLACK }}>
          <TouchableOpacity style={styles.nextButtonWrapper} onPress={this.onNextPress}>
            <Text style={styles.txtNext}>Next</Text>
            <Image style={styles.iconNext} source={require('img/icon_next.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(NumericSelector.numeric$)(NumericScene);
