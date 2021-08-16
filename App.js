import React from 'react';
import WebView from 'react-native-webview';

function App() {
  return (
    <>
      <WebView source={{uri: 'https://test.com'}} style={{ marginTop: 20 }} />
    </>
  );
}

export default App;
