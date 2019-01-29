import React, { Component } from "react";
import { Alert, Text, View, LayoutAnimation, UIManager, Platform, TouchableOpacity, Dimensions, Image, FlatList, ImageBackground } from "react-native";
import { Content, Card, Icon } from "native-base";
import { connect } from 'react-redux';

import HeaderGoBack from "../../components/headerGoBack";
import GlobalFunction from "../../utils/globalFunction";
import GlobalStyle from "../../style/globalStyle";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

class Feature extends Component {

    static navigationOptions = {
        title: '',
        header: null
    };

    constructor(props) {
        super(props);
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        this.state = {
            
        };
    }

    render() {
        return (
            <View style={GlobalStyle.fill}>
                <HeaderGoBack onBack={() => this.props.navigation.goBack()} pagetitle='All Clinics' />
                <Content>
                    
                </Content>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
