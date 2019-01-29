import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  StatusBar,
  View
} from "react-native";
import {
  Container,
  Toast
} from "native-base";

import GlobalFunction from "../../utils/globalFunction";
import GlobalStyle from "../../style/globalStyle";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch({
        type: 'Navigation/RESET',
        index: 0,
        actions: [
          { type: 'Navigation/NAVIGATE', routeName: 'LandingScreen' }
        ]
      })
    }, 1500);
  };

  render() {
    return (
      <Container style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
        <StatusBar
          backgroundColor={'white'}
          barStyle="light-content" />
      </Container>
    );
  }
}

export default Splash;
