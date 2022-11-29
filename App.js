import React from 'react';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from 'expo-status-bar';
StatusBar

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}

// npm install --save-dev babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-react eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
