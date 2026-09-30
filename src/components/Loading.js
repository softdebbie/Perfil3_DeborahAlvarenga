import { View, ActivityIndicator, Text } from 'react-native';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#cc0000" />
      <Text style={{ marginTop: 10 }}>{message}</Text>
    </View>
  );
}