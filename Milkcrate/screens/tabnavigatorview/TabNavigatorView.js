/**
 * react-native-tabbar-navigator sample app
 * https://github.com/DickyT/react-native-tabbar-navigator
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Image,
  ActionSheetIOS,
  SegmentedControlIOS,
  Button
} from 'react-native';
import { TabNavigator } from 'react-native-tabbar-navigator';

var SearchBar=require('react-native-search-bar');

const __STYLE = StyleSheet.create({
  flexEnabled: {
    flex: 1
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12
  },
  whiteColor: {
    color: '#ffffff'
  },
  searchCtrlView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchCtrl: {
    width: 280
  },
  view: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    color: '#007AFF',
    fontSize: 22,
    marginTop: -200
  },
  bodyStyle: {
    color: '#2B2B2B',
    backgroundColor: '#ffffff',
    padding: 15,
    marginTop: 50,
    marginBottom: 50
  }
});

const tabHomeIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAAAAXNSR0IArs4c6QAAAcxJREFUOBG1Uj1LA0EQ3b182GhxCnaCKKTxLygKpslhZZFEE5E0KdJoLYiFv0DBVkHvYkglCElhERERBRtBBI2FzaUSo+EQEthd355uuJwaUXBhmY+defN2Zij54RSLxX7OW5FEInVBKRUyfH/fnGaMhHGq8Xj8XkFQpXwlLcuKEiKKQggdQGVdJ0nHCQ+2Ws2qjJe+VCptqFxNKX6Zz5s5AJXh78O9AmCsXidnYDnij1V2UClKViqVoG3bG5yLHCrXKdXmAwH+zJjIADDLGD1QsX7ZwQzf0ms1G2wEWNFbTQvMcM5X0J9TAF9TSpYBEPaDKLsNVigUIoTwc1SPIukIyVnOmQXgCfgCYLoJ35imiVnIlw+AAby1MdwB+Bq9pWnkmHOyg8BeVVVJAJ2A9SoKbwtBRmG7gzGMdIPm83tzQtBdGQxGSxA6gtYB9O2kAfAAhhn0bw3Mp5B5A9+4HADDbcCxIATHJUnYXQ8KDXNODwGwCAJV2JNYG+ZWL5VKPY7jDKn96YrkeZRflHsm8w3DaLrNk4onxqu+yoT3Sy69D15d5X/aM28Q9JracNM0Y+hPyffeYbbH2uH9o/E/YKFQ6BG9efodKXrnjX8DO2vFmAc795oAAAAASUVORK5CYII=';
const tabSearchIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAoNJREFUOBGdVE1oE0EUnrdJ6Gb9ATF6iCAIQgVRxEZFBCWCBLWKpBAkiRcFBS9evIgU1IAoeBFP7UE8JEFyiKASCEVCvQmJoFA0peApCBqRVjSRuDt+M9nJTraxBxey8973vffNe/NmQ8z3VCqVseXlbwc5pwnHYROgVwIB1uDcqKfT6fe+8CGXdC+fzx9hjD8BtlPHlU1EL02TX56auvBZYfpqKKdQyOcg9Br+SCERxzmf7HZpAZueVHn6KisrFovnHMd+pghU0CBijw2DvXUcYwNEDkHqGtaIiAH/HRXu9lcYhFAEQjNKCKH3otFt0/F4/I+HsblyuTzb6fx6CsE4fptQ4Sz4M1oMM0BcArBVgNixms1mb/iEZHwymfwSDlvnEdMWAPImUcheSbovIRbzALrp2astIYgtHyqGyNFyGcMAuBi/eLrRaPRd3/z3G5W9Uaxty6ujXCHGNgoPQZ1R7Q0iXcMwnB8Kw5A2K1usEKOGMMShlkqlHcJe68FF3u/xtOjZEMP4pZgAe73fV3TSb9dqtSDn7KKGD3IFhgFQCS2614CuY0LHteAhs9Vq5dCBPGO0uIjP64UeIC9toVC4w7kzLQgI22j6QSg0NpNKpT7V6/XQ0tKHPbZNdyGUUMlExq1MJnNb+TJXvERCs/lxHsGHh0jcdGBhYKaOu3bXMAJnUd2c4sQ0WSwW642P7zqG3XJey/2hgNaEaAX8gpts4st5jmM54fpMtqkcsaLlfUQ81f/7kefTw/k0Qb2yrPWPLMvqtdtfK6j4qJs3qHCVmBuw5lKtVtf5BYPB0AHZ5pqZI8hEIvEzEtlyChXPu7Rp2/bp/6pM6bsV3sfpbjdNuvoXjRj7KMTzDusAAAAASUVORK5CYII='
const tabAlertsIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAAalJREFUOBGVVL1Lw0AUzyVREMcO6iY4VKRjVxEUF3ETpCR1c3ZycnJycnLuIGjakj9AKKJU546ipuDUTborNs35ezYJ6X2kMRDuvff7yCXvXgyjwOX7/jzdBaiGOYvEOTdHo58XuimexWd5hHa7vRaG4aFh8IsJj53Ztu3XarUPnU5p2Ov15oLg/RI7OlEJGWNX5fL6abVaHYm4LRYoh9k1zBwVRjV6UBC8lRDWRY60w2azuR1F4weRqMpN09pxHOcxi0kfmfPxfpaQF6u4kiEMKnkmAiZxJUPOjRVBpE1VXMkQHVzWOgiAijtlSMcFGupe0asUa1L+lGG/39/EkZA6n7KFgLikyZanDKMoOsiCRWJRkxp2Op1Fxox/G5KGtMnDU8Ph8PMcr7CUAEVX0pA24f99L0zHLufRHUDlKCZk3Ypuh4yZe5iae9ZqtVYxaq8wW9AJitRh+oVR3DAtyxpA0EWBa4TfmnpajrVd8so9Ip53+4R/ywAT4SZqiJ9dt76V5OKaNkUEJjlrwKyCTnrI452yhpobK/JAwjzPO8Iuj2N6w3XdmzzNL7qroTJxkkfcAAAAAElFTkSuQmCC'
const tabYouIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAZVJREFUOBGVUr9Lw0AUvruWOgSHVsFWOrnpKDq4VDu2i3SSkKqDzi7iHyA4+0+YppU6iShFMIubmyB0UMSliLaUWATFpM/viqWXmKE5CH33/Ur63uMs5DQaDa3dbu8Q0TLoj1iM2bpePguRMh4Ea7XavOe5FzDPqRzn/CqZTJWKxeK3igv1Ytt23HVdM2iWGmCFbrdzqOpl7QtotVqLkOIJP0RsN8j4AkAuBAWB+5RlWTMq5gsQov+kkiF1T9f1NxX3BaTT2TuQz6rAX/M6mkkq5gvI5/NfQsS2IHJUkayBPWiatv8Pl4Cce6fzvo0mlSC9BWQx1t8j4kt4YQ/mGyHidc/7OQLfF4JOdX3zXHoHe1CpnGB0zJDA33nlnJkY0j3GpyFkBfgGNBNDAeeibBhGhZumWcDoLodEhN9eKsWzsgfrEUyqdNJxaA0BlFPRKDV6lBNokG8xogVQWn6BFsUU0GoCnW0GwLGv+AtNgcU5gONzbNdI+JhIJI4He1CtVmeJ3FWsxfSID6/wVkLfXjKZzLXc3F9K8IpEaYFzTwAAAABJRU5ErkJggg=='
const shareIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA2FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8lb+eLAAAAR3RSTlMAAQIEBQYHCAsMDxESExQVGhwdHyQmKiwtLzA0Njg5R1ZbXF9pb3N+f5GXmJqbnqCjqKqttbm6wMPH0dPV2dzk6e/x8/X3/T2VMTsAAAFbSURBVFjD7ZXZWsIwEIXTICKuNIiKiru4r7igUrWinvd/Iy9KWkgnaWNu/Pxy7jKd8+eUkgljXl4W6nJHAKLQEQC4hQDgFgKAW4gE4BACUr8NkQLUENCpv8V1fRMhNPbHpjaBEoK0v68bXkEJQflPplgRIAtB+LfHjbXWznHv5e0r3zYKkat/Lmfu+b0B9EpCqNXhYmpfvUeBujwH+G5Ie7OPYkVhClB+M36EMoqEBjDzXMo//goT/oW45PaMBszGZbenAZUo+ybXu+1GvcIDRm9PA05Hpdf9JYu/cta6khR6LcNhEvkHWWUAAHeh4SyQxzktrAGIO6aBIsgHaeEGeKhZjDQVUAXOAsNQFTqyXLdxbjfWVcDhU6C/WIRh2sr17Zzl1aYCDrSXqzDPe7muF1/vG+bPWKTqBZwAmx9wAUxf5nqtAJ0hnABXVK8NAH8bYCMP+H8ALy/G2A8xvHk9GDO2vgAAAABJRU5ErkJggg=='
const moreIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA7VBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9sDJFPAAAATnRSTlMAAQMEBQkMEBETGRodICEiIyUmLTAxNTY4O0JKS1ZYWVtdYmNmZ3FzdH+ChYmOj5GVmpueoK+wtLW3ur7Ax8jP0dfZ2tzg4uTv8fP19/tDFvODAAAA+ElEQVRYw+2T2VLCQBBFLwRBRTYFBRSURaMoIKsrogEXEun//xwfAqQnMUIVPvDQ563r3Jnqmu4BBEEQBOGfSdXH5qC65RURfWi9Xe16Rej06eujlbaLwC0REdH00B0r2IIu3CI+sUVPA4AGzUmqsfxClFWxM52LHoDYIkZGgMc0yzFh5YJ7R2SBa6eiPR7LMlHkIszEHWCw8pjndCY6XBwwQcA3q0o8d8PEIxc5fkFQ6eDEr4PuHx2s/QZsCqMVp/CgTAHN5XtQ8duDvrKJR36bqLtFwpyd1+x6v/Fuvpz/8he2L18toxb1itDZ8+SznYEgCIIgbBw/0r5ytCbnafQAAAAASUVORK5CYII=';
const settingsIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAbFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8+T+BWAAAAI3RSTlMAAgsSGyYrMUZHVWRmdHV+iI+RnabAwcXHyNHT2drv8fP3+fXCL1oAAACCSURBVFjD7Za3CsAwEEOd3ntxerH//x8zmAyBDOacLXqr0WE46RBj4F842bBPlUfWh1JREvWuvImfD9IMjgGSm29Bm8jQB4w5+XjMtYdIAg2CZtm6xKbKrVbZ9fSJA4o7MEL/D7hIX580yhZefSB8AyeuW5/aiCRAzUPNQ81DzfstFyjKk29ZOBvjAAAAAElFTkSuQmCC';
const dropDownIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA6lBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Le70HAAAATXRSTlMAAQMEBQYLDA4PEBESExQVFhclKCkqKy4vMjQ2Nzg5OjxBTl5hZGZnaWxvcXN1d3l7fI6bnqKlpqqrrbCytLnR1dna3N7g4unz9ff5+/iYwqsAAAERSURBVBgZ7cHXQsJAAATATbEHRbFi74JdI8QK0hSS/f/fEQtISLu7vGYGmUxmYPnadpRU7w4MACdMoa0DLtMoAA2mkQf2mcIb+ipU9jmJPqNBVSv4YblUc4g/RSq5x1CJCmo6/jmU1p3GCKNJWavwsVzKOcKYTUqxEVCmhLqOoEcK684ghNmiqDWEynkUc4wI2xTygEjnFFDXEe2JiXqziGG2mGQdseY9xjtFgh3GqiDRBWO8G0ikPTNSbw4CzDajbEDIgsdwZxC0y1BVCLtkiIYBYdoLA1wLEswOxxUhJe/RrwRJe/RxIO2KI5oGpGmvHHJzUDDR4cAWlCx6/FWGooLLbzdQNnXb+rCXkMlkkn0BMhSuRHcWyPUAAAAASUVORK5CYII=';


function NavItemText(props) {
  return (
    <TouchableOpacity style={__STYLE.navItem} {...props}>
      
    </TouchableOpacity>
  );
}

function NavItemTextBack(props) {
  return (
    <TouchableOpacity style={__STYLE.navItem} {...props}>
      
    </TouchableOpacity>
  );
}

function NavItemIcon(props) {
  return (
    <TouchableOpacity style={__STYLE.navItem} {...props}>
      
    </TouchableOpacity>
  );
}

function NavItemIconSettings(props) {
  return (
    <TouchableOpacity style={__STYLE.navItem} {...props}>
      <Image style={{width: 20, height: 20}} source={{uri: settingsIcon}}/>
    </TouchableOpacity>
  );
}

function NavItemSearchCtrl(props) {
  return (
    <View style={__STYLE.searchCtrlView}>
      <SearchBar style={__STYLE.searchCtrl}
        placeholder={'Discover'}
        height={30}
        width={300}
        textFieldBackgroundColor={'#66BCAE'}
        textColor={'white'}
        barTintColor={'#82CCBE'}
        hideBackground={true}
        placeholderTextColor={'white'}
      />
    </View>
  );
}

function TabHomeIndex({ navigator, ...props }) {
  function onPress() {
    navigator.push({
      title: '#1 Next Page',
      component: (<TabHomeDetail/>),
      navItems: {
        rightItem: {
          
        }
      }
    });
  }
  return (
    <View style={__STYLE.view} {...props}>
  
    </View>
  );
}

function TabHomeDetail({ navigator, ...props }) {
  function onPress() {
    navigator.pop();
  }
  return (
    <View style={__STYLE.view} {...props}>
    </View>
  );
}

function TabSearchIndex({ navigator, ...props }) {
  function onPress() {
    navigator.push({
      title: 'Placeholder',
      component: (<TabSearchDetail/>),
      navItems: {
        leftItem: {
          component: (<NavItemTextBack/>),
          onPress: (isRoot, pop) => {
            ActionSheetIOS.showActionSheetWithOptions({
              options: ['navigator.pop()', 'Cancel'],
              destructiveButtonIndex: 1
            }, (idx) => {
              if (idx == 0) {
                navigator.pop();
              }
            });
          }
        }
      }
    });
  }
  return (
    <View style={__STYLE.view} {...props}>
      
    </View>
  );
}

function TabSearchDetailTitle(props) {
  return (
    <TouchableOpacity style={__STYLE.navItem} {...props}>
      <Text style={{color: '#ffffff'}}>Touch Here</Text>
      <Image style={{width: 10, height: 10}} source={{uri: dropDownIcon}}/>
    </TouchableOpacity>
  );
}

function TabSearchDetail({ navigator, ...props }) {
  function onPress() {
    navigator.pop();
  }
  function changeTitleElement() {
    // You could run this in componentDidMount or somewhere else
    let currentRouteStack = navigator.getCurrentRoutes();
    let currentRoute = currentRouteStack[currentRouteStack.length - 1];
    currentRoute.title = {
      component: (<TabSearchDetailTitle/>),
      onPress: () => {
        ActionSheetIOS.showActionSheetWithOptions({
          options: ['navigator.pop()', 'Cancel'],
          destructiveButtonIndex: 1
        }, (idx) => {
          if (idx == 0) {
            navigator.pop();
          }
        });
      }
    };
    navigator.replaceAtIndex(currentRoute, currentRouteStack.length - 1);
  }
  return (
    <View style={__STYLE.view} {...props}>
      <Text style={__STYLE.titleStyle}>
        navigator.push(route)
      </Text>
      <Text style={__STYLE.bodyStyle}>
        Customizing Top-Left and Title navigation item, assigning Title.onPress to THIS Component.
        You can run this inside `componentDidMount` for other purposes.
      </Text>
      <Text style={[__STYLE.bodyStyle, { marginTop: -10 }]}>
        Remember to wrap them inside a setTimeout(() => {}, 0) inside `componentDidMount`.
      </Text>
      <Button
        title='Change Title'
        color='#FF4981'
        onPress={changeTitleElement}/>
    </View>
  );
}

function TabAlertsIndex({ navigator, ...props }) {
  function onPress() {
    navigator.push({
      title: '#1 Next Page',
      component: (<TabAlertsDetail/>),
      navItems: {
        rightItem: {
          
        }
      }
    });
  }
  return (
    <View style={__STYLE.view} {...props}>
      
    </View>
  );
}

function TabAlertsDetail({ navigator, ...props }) {
  function onPress() {
    navigator.pop();
  }
  return (
    <View style={__STYLE.view} {...props}>
    </View>
  );
}

function TabYouIndex({ navigator, ...props }) {
  function onPress() {
    navigator.push({
      title: '#1 Next Page',
      component: (<TabYouDetail/>),
      navItems: {
        rightItem: {
          
        }
      }
    });
  }
  return (
    <View style={__STYLE.view} {...props}>
      
    </View>
  );
}

function TabYouDetail({ navigator, ...props }) {
  function onPress() {
    navigator.pop();
  }
  return (
    <View style={__STYLE.view} {...props}>
    </View>
  );
}

function TabNavigatorView() {
  let navItems = [
    {
    },
    {
      title: {
        component: (<NavItemSearchCtrl/>)
      },
      
    }
  ];
  return (
    <TabNavigator tintColor='#82CCBE' navBarTintColor='#82CCBE'>
      <TabNavigator.Item title='Home' icon={{uri: tabHomeIcon, scale: 1}} navItems={navItems[0]} defaultTab>
        <TabHomeIndex/>
      </TabNavigator.Item>
      <TabNavigator.Item title='Search' icon={{uri: tabSearchIcon, scale: 1}} navItems={navItems[1]}>
        <TabSearchIndex/>
      </TabNavigator.Item>
      <TabNavigator.Item title='Alerts' icon={{uri: tabAlertsIcon, scale: 1}} navItems={navItems[0]} badge='1'>
        <TabHomeIndex/>
      </TabNavigator.Item>
      <TabNavigator.Item title='You' icon={{uri: tabYouIcon, scale: 1}} navItems={navItems[0]}>
        <TabHomeIndex/>
      </TabNavigator.Item>
    </TabNavigator>
  );
}

export default TabNavigatorView;
