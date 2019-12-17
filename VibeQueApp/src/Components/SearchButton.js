import React, { Component } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';

export default class SearchButton extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  _onPressButton() {
    alert('Homma vaiheessa!:)');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, color: 'white' }}
          placeholder='Enter your song'
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Search your favorite songs!*_*'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
