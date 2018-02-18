import React, { Component } from 'react';
import { Navigator, StyleSheet, StatusBar, Platform } from 'react-native';
import {
  NumericScene,
  SearchScene,
  ContractListViewScene,
  ContractOverViewScene,
  CreateContractScene,
  LoginScene
} from 'AppScenes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export class Router extends Component {
  constructor(props, context) {
    super(props, context);
    this.renderScene = ::this.renderScene;
    this.navigationRef = null;
  }
  componentDidMount() {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    } else {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }

  routingScene(sceneName) {
    if (sceneName === 'NumericScene') {
      this.navigationRef.resetTo(sceneName);
    }
  }

  renderScene(route, navigator) {
    const currentRoute = typeof route === 'string' ? { name: route } : route;
    switch (currentRoute.name) {
      case 'LoginScene':
        return (
          <LoginScene
            navigator={navigator}
            {...route.passProps}
          />
        );
      case 'NumericScene':
        return (
          <NumericScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'SearchScene':
        return (
          <SearchScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'ContractListViewScene':
        return (
          <ContractListViewScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'ContractOverViewScene':
        return (
          <ContractOverViewScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      case 'CreateContractScene':
        return (
          <CreateContractScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
      default:
        return (
          <NumericScene
            navigator={navigator}
            {...route.passProps}
            onBack={() => navigator.pop()}
          />
        );
    }
  }
  renderConfig(route, routeStack) {
    const pushFromBottom = Navigator.SceneConfigs.PushFromRight;
    pushFromBottom.springFriction = 35;
    pushFromBottom.gestures.disabled = true;
    return pushFromBottom;
  }

  render() {
    return (
      <Navigator
        sceneStyle={styles.container}
        initialRoute={{ name: 'LoginScene' }}
        renderScene={this.renderScene}
        configureScene={this.renderConfig}
        style={{ backgroundColor: '#686868' }}
        ref={(ref) => this.navigationRef = ref}
      />
    );
  }
}
