import React from 'react';
import SongBox from './src/Components/SongBox';
import { View, Text, ScrollView } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <SongBox />
      </View>
    );
  }
}
