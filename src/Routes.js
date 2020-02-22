import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

<<<<<<< HEAD
import Home from '$root/Pages/Home';
=======
import Home from './Pages/Home';
>>>>>>> f3afe1e94ce4da792cf323b302d880e40e7066f9

const { Screen, Navigator } = createStackNavigator();

function Routes() {
  return (

    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home}
        options={{
          title: 'My app',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#7d40e7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }} />

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;