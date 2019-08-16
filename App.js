/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  LayoutAnimation,
  UIManager,
} from 'react-native';

import rocket from './assets/rocket.png';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {position: 'flex-start'};
  }

  changePosition = position => {
    LayoutAnimation.spring();
    this.setState({
      position,
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={[styles.container, {justifyContent: this.state.position}]}>
          <Image style={styles.logo} source={rocket} />
          <View style={styles.buttonsContainer}>
            <Button
              style={styles.button}
              title="Top"
              onPress={() => this.changePosition('flex-start')}
            />
            <Button
              style={styles.button}
              title="Middle"
              onPress={() => this.changePosition('center')}
            />
            <Button
              style={styles.button}
              title="Bottom"
              onPress={() => this.changePosition('flex-end')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 64,
    paddingBottom: 32,
  },

  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  button: {
    width: 100,
  },
});

export default App;
