import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FF2B62',
    fontSize: 15,
    backgroundColor: 'black'
    
  },
  input: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FF2B62',
    borderRadius: 20,
    width: 270, 
    height: 40,
    color: 'white',
    padding: 10,
    marginBottom: 30,
    marginTop: 2
  },
  container: {}
});

export default class SearchSongs extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChangeText(text) {
    const { onChange } = this.props;

    this.setState(
      {
        text
      },
      () => {
        onChange(text);
      }
    );
  }

  render() {
    const { text } = this.state;

    return (
      <View stlye={styles.container}>

        <TextInput
          style={styles.input}
          placeholder='Search for songs, albums, artists...'
          placeholderTextColor='rgb(255, 141, 253)'
          value={text}
          onChangeText={text => this.handleChangeText(text)}
        />
      
 
      </View>
    );
  }
}
