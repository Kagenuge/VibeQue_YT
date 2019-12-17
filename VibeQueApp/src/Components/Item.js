import React from 'react';
import postSong from '../Components/serviceClient';
import ModalPopup from './ModalPopup';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
// import postSong from '../api/token';
const url = 'http://localhost:3000/api/songrequest';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10
  },

  text: {
    color: 'white'
  },

});

export default ({ item: { imageUri, title, type, name, previewUrl } }) => (
  <TouchableOpacity
    onPress={() => {
      handleClick = songUrl => {
        console.log('url: ' + songUrl);
        postSong(songUrl);
        //        toggleChosen();
      }

      Alert.alert(
        'Set you entrance song to be: ',
        '' + name + ' - ' + title + '',
        [
          {
            style: 'destructive',
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed')
          },
          {
            text: 'OK',
            onPress: () => {
              if (previewUrl) {
                handleClick(previewUrl);
              } else {
                console.log('No url yet')
              }
            }
          }
        ]
      );

    }}

  >
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />

      <Text style={styles.text}>{name}
        {"\n"}
        {title}</Text>
      <Text style={styles.text}>{type}</Text>
    </View>
  </TouchableOpacity>
);
