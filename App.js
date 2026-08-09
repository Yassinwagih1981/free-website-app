import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.inputContainer}>
        <WebView 
          source={{ uri: 'https://yourwebsite.com' }} 
          style={styles.webview}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          allowsBackForwardNavigationGestures={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
