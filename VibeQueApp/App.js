import React from 'react';
import { View, Text, Image } from 'react-native';
import ModalPopup from './src/Components/ModalPopup';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import AppNavigator from './AppNavigator';
import SongBox from './src/Components/SongBox';
import { LinearGradient } from 'expo-linear-gradient';

class HomeScreen extends React.Component {
  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
                <Image
          style={{width: 306, height: 70, marginTop: 180}}
          source={require('./src/pics/logo1.png')}
        />
        <LinearGradient
          colors={['black', 'black', '#FF2B62',  '#FF2B62', 'black', 'black']}
          style={{ padding: 10, alignItems: 'center', borderRadius: 10 }}>
        
        <SongBox />
        </LinearGradient>
     {/*    <ModalPopup /> */}
      </View>
    );
  }
}

export default HomeScreen;
