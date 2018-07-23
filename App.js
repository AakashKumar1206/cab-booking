import React from 'react';
import { View,StyleSheet } from 'react-native';
import  Root  from './src/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  conatiner : {
    flex:1,
  }
})