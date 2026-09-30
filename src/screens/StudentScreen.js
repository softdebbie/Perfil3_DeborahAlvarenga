import { View, Text, Button, StyleSheet } from 'react-native';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del estudiante</Text>
      <Text style={styles.text}>Nombre: Deborah Alvarenga</Text>
      <Text style={styles.text}>Carnet: 20240487</Text>
      <Text style={styles.text}>Sección y grupo: A2</Text>
      <View style={{ marginTop: 24 }}>
        <Button title="Ver personajes" onPress={() => navigation.navigate('Api')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 50 },
  text: { fontSize: 18, marginVertical: 4 },
});