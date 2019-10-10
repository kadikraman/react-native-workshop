import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default (props) => (
  <View style={styles.header}>
    <Text style={styles.title}>
      #{props.title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
