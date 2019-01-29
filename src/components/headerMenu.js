import React, { Component } from 'react';
import { View, StatusBar, Dimensions, Image, TouchableOpacity, Platform } from 'react-native';
import { Header, Icon, Button, Card, Container, Content, CardItem, Text, Left, Body, Right } from 'native-base';

import GlobalStyle from '../style/globalStyle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HeaderGoBack extends Component {

    render() {
        let { pagetitle, onBack } = this.props
        return (
            <View>
                <StatusBar
                    backgroundColor={'white'}
                    barStyle="dark-content" />
                <View style={{ height: 60 }} />
            </View>
        );
    }
}