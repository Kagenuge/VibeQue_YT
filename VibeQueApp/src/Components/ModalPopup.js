import React, { Component, useState } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, Button } from 'react-native';

const ModalPopup = () => {
  const [visible, setVisible] = useState({ modalVisible: true })

  const setModalVisible = (visible) => {
    setVisible({ modalVisible: visible })
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 22,
      backgroundColor: 'black'
    }
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible.modalVisible}
        onRequestClose={() => setVisible({ modalVisible: false })}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <Text>Its a Modal bois</Text>
            <TouchableHighlight onPress={() => { setModalVisible(!visible.modalVisible) }}>
              <Text>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight onPress={() => {
        setModalVisible(true)
      }}><Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  )
}

export default ModalPopup;