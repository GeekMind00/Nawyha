import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import ApartmentListingPage from './screens/ApartmentListingPage';
import ApartmentDetailsPage from './screens/ApartmentDetailsPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Nawyha"
        component={ApartmentListingPage}
        options={({ navigation }) => ({
          headerTitle: () => (
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nawyha</Text>
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ApartmentDetails"
        component={ApartmentDetailsPage}
        options={({ route }) => ({
          title: route.params.apartment.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
