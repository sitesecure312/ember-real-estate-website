import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SideMenu } from 'AppComponents';
import { UISelector } from 'ReduxSelectors';
import { AccountActions } from 'ReduxActions';
import { CurrencyUtils, ContactUtils } from 'AppServices';
import { Router } from './routing';

class MainContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.navigator = null;
    this.routingScene = this.routingScene.bind(this);
    this.showSideBar = this.showSideBar.bind(this);
    CurrencyUtils.initialize();
    ContactUtils.getContacts(this.props.dispatch);
    this.props.dispatch(AccountActions.login({
      username: 'zprager1-7',
      password: 'nick_test_123'
    }));
  }

  routingScene(sceneName) {
    this.routingRef.routingScene(sceneName);
  }
  showSideBar(value) {
    this.props.showSideBar(value);
  }
  render() {
    const { sidebar } = this.props;
    return (
      <SideMenu
        isOpen={sidebar}
        showSideBar={this.showSideBar}
      >
        <Router ref={ref => this.routingRef = ref} />
      </SideMenu>
    );
  }
}

export default connect(UISelector.sidebar$$)(MainContainer);
