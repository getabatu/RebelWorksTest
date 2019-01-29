import React, { Component } from 'react';
import { View, Dimensions, Platform, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Header, Icon, Button, Card, Container, Content, CardItem, Text, Left, Body, Right, Input, Item } from 'native-base';

import GlobalStyle from '../style/globalStyle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HeaderGoBack extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      cartQty: 0
    };
  }

  closeSearch() {
    this.setState({ isSearch: false })
    this.props.closeSearch();
  }

  render() {
    let { pagetitle, onBack } = this.props
    return (
      <View style={{ position: 'absolute', zIndex: 2 }} >
        <StatusBar
          backgroundColor={'rgba(255,255,255,0.5)'}
          barStyle="dark-content" />
        {
          Platform.OS == 'ios' && <View style={{ height: 20 }} />
        }
        <View style={GlobalStyle.topbar_header_view}>
          <TouchableOpacity onPress={onBack}>
            <View style={GlobalStyle.topbar_back}>
              <Icon name='ios-arrow-back' style={GlobalStyle.icon} />
            </View>
          </TouchableOpacity>
          <View style={{ width: width * 0.90, justifyContent: 'space-between', flexDirection: 'row' }} >
          </View>
        </View>
      </View>
    );
  }
}