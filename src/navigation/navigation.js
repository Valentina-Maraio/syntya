import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import MusicDetails from '../screens/MusicDetails'

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="MusicDetails" component={MusicDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;