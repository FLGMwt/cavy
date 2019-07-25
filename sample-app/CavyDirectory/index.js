/**
 * @format
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { Tester, TestHookStore } from 'cavy';

import EmployeeDirectoryApp from './app/EmployeeDirectoryApp';
import WrapExample from './app/WrapExample';

import EmployeeListSpec from './specs/EmployeeListSpec';
import WrapSpec from './specs/WrapSpec';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      <Tester
        specs={[WrapSpec]}
        store={testHookStore}
        waitTime={1000}
        startDelay={3000}
      >
        <WrapExample />
      </Tester>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppWrapper);
