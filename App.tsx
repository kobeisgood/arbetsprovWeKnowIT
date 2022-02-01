import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomePage } from './screens/HomePage'
import { CitySearchPage } from './screens/CitySearchPage'
import { CountrySearchPage } from './screens/CountrySearchPage';
import { CityResultPage } from './components/CityResultPage';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}/> 
        <Stack.Screen name="CitySearch" component={CitySearchPage} options={{ headerShown: false }} /> 
        <Stack.Screen name="CountrySearch" component={CountrySearchPage} options={{ headerShown: false }} />
        <Stack.Screen name="CityResult" component={CityResultPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App