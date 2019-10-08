import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {<Text>liste sujets</Text>}  
    </ScrollView>
    
  );
};

LinksScreen.navigationOptions = {
  title: "Proposer",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'lightgrey',
  },
});