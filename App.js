import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/Main';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Main'}
                    component={Main}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            {/* <StatusBar style="auto" /> */}
        </NavigationContainer>
    );
}
