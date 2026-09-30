import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from './src/screens/StudentScreen';
import ApiScreen from './src/screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Student">
        <Stack.Screen name="Student" component={StudentScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Api" component={ApiScreen} options={{ title: 'Rick and Morty' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}