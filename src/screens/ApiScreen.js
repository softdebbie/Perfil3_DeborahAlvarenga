import { FlatList, Text, View } from 'react-native';
import useCharacters from '../hooks/useCharacters';
import Card from '../components/Card';
import Loading from '../components/Loading';

export default function ApiScreen() {
  const { characters, loading, error } = useCharacters();

  if (loading) return <Loading />;
  if (error)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ocurrió un error: {error}</Text>
      </View>
    );

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Card title={item.title} image={item.image} description={item.description} />
      )}
    />
  );
}