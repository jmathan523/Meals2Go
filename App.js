import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text style={styles.text}>Search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.text}>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: 'green',
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    padding: 16,
  },
});
