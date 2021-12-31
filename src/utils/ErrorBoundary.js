import React from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Alert} from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({hasError: true});
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Text>Something went wrong.</Text>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary
