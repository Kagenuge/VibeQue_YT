// import React, { Component } from 'react';
// import {
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView
// } from 'react-native';
// import { AuthSession } from 'expo';
// import { FontAwesome } from '@expo/vector-icons';
// import axios from 'axios';

// //const CLIENT_ID = '272d15472aa64a7fb339848f6db57257';

// // export default class App extends Component {
// //   state = {
// //     userInfo: null,
// //     didError: false,
// //     songNames: ''
// //   };

// //   handleSpotifyLogin = async () => {
// //     let redirectUrl = AuthSession.getRedirectUrl();
// //     let results = await AuthSession.startAsync({
// //       authUrl: `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
// //         redirectUrl
// //       )}&scope=user-read-email&response_type=token`
// //     });
// //     if (results.type !== 'success') {
// //       console.log(results.type);
// //       this.setState({ didError: true });
// //     } else {
// //       const userInfo = await axios.get(`https://api.spotify.com/v1/me`, {
// //         headers: {
// //           Authorization: `Bearer ${results.params.access_token}`
// //         }
// //       });
// //       this.setState({ userInfo: userInfo.data });

// //       const songNames = await axios.get(
// //         `https://api.spotify.com/v1/tracks/6rqhFgbbKwnb9MLmUQDhG6`,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${results.params.access_token}`
// //           }
// //         }
// //       );

// //       this.setState({ songNames: songNames.data });
// //     }
// //   };

// //   displayError = () => {
// //     return (
// //       <View style={styles.userInfo}>
// //         <Text style={styles.errorText}>
// //           There was an error, please try again.
// //         </Text>
// //       </View>
// //     );
// //   };


// //   displayResults = () => {
// //     {
// //       return (
// //         this.state.songNames,
// //         this.state.userInfo ? (
// //           <View style={styles.userInfo}>
// //             <Image
// //               style={styles.profileImage}
// //               source={{ uri: this.state.userInfo.images.url }}
// //             />
// //             <ScrollView>
// //               <Text style={styles.userInfoText}>Username: {'\n'}</Text>
// //               <Text style={styles.userInfoText}>{this.state.userInfo.id}</Text>
// //               <Text style={styles.userInfoText}>Email: {'\n'}</Text>
// //               <Text style={styles.userInfoText}>
// //                 {this.state.userInfo.email}
// //               </Text>
// //               <Text style={styles.userInfoText}>display_name: {'\n'}</Text>
// //               <Text style={styles.userInfoText}>
// //                 {this.state.userInfo.display_name}
// //               </Text>
// //               <Text style={styles.userInfoText}>Product: {'\n'}</Text>
// //               <Text style={styles.userInfoText}>
// //                 {this.state.userInfo.href}
// //               </Text>
// //               <Text style={styles.userInfoText}>song.id: {'\n'}</Text>

// //               <Text style={styles.userInfoText}>
// //                 {' '}
// //                 {'\n'} {this.state.songNames.id}
// //               </Text>
// //               <Text style={styles.userInfoText}>
// //                 {'\n'}
// //                 <Text style={styles.userInfoText}>Album type:</Text>

// //                 {this.state.songNames.album_type}
// //               </Text>

// //               <Text style={styles.userInfoText}>
// //                 {'\n'}
// //                 Popularity: {'\n'}
// //                 {this.state.songNames.popularity}
// //               </Text>
// //             </ScrollView>
// //           </View>
// //         ) : (
// //           <View style={styles.userInfo}>
// //             <Text style={styles.userInfoText}>
// //               Login to Spotify to see user data.
// //             </Text>
// //           </View>
// //         )
// //       );
// //     }
// //   };

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <FontAwesome name='spotify' color='#2FD566' size={128} />
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={this.handleSpotifyLogin}
// //           disabled={this.state.userInfo ? true : false}
// //         >
// //           <Text style={styles.buttonText}>Login with Spotify</Text>
// //         </TouchableOpacity>
// //         {this.state.didError ? this.displayError() : this.displayResults()}
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flexDirection: 'column',
// //     backgroundColor: '#000',
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'space-evenly'
// //   },
// //   button: {
// //     backgroundColor: '#2FD566',
// //     padding: 20
// //   },
// //   buttonText: {
// //     color: '#000',
// //     fontSize: 20
// //   },
// //   userInfo: {
// //     height: 250,
// //     width: 200,
// //     alignItems: 'center'
// //   },
// //   userInfoText: {
// //     color: '#fff',
// //     fontSize: 18
// //   },
// //   errorText: {
// //     color: '#fff',
// //     fontSize: 18
// //   },
// //   profileImage: {
// //     height: 64,
// //     width: 64,
// //     marginBottom: 32
// //   }
// // });
