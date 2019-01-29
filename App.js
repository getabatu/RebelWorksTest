import React, { Component } from 'react';
import { Root } from 'native-base';

import AppNavigation from './src/AppNavigation';

export default class App extends Component {

  render() {
    return (
        <Root>
          <AppNavigation />
        </Root>
    );
  }
}
