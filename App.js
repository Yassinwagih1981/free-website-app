import React from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.webContainer}>
        <WebView 
          source={{ uri: 'https://orbitly-app.lovable.app' }} 
          style={styles.webview}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          allowsBackForwardNavigationGestures={true}
          originWhitelist={['*']}
          mixedContentMode="always"
          sharedCookiesEnabled={true}
          thirdPartyCookiesEnabled={true}
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
  webContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
