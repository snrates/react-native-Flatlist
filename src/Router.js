import * as React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Listpage from './Pages/Listpage';
import ListDetail from './Pages/ListDetail';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= 'List'>

        <Stack.Screen 
        name="List" 
        component={Listpage}   
        options={({ navigation, route }) => ({    
          
          title: 'todolist',
          headerRight: () => (
            <TouchableOpacity
               onPress={ () =>navigation.navigate('Listdetail')}
               style={{marginRight: 15}}
            >
              <Text style={{fontSize: 30}}>+</Text>
            </TouchableOpacity>
          ),

        })}
        />

        <Stack.Screen
        name="Listdetail"
        component={ListDetail} 
        options={{title: 'addtodolist'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;