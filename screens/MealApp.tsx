import React from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import CategoriesScreen from './CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './MealsOverviewScreen';
import MealDetailScreen from './MealDetailScreen';
const stack = createNativeStackNavigator();
export default function Mealapp() {
  return (
    <>
      <StatusBar backgroundColor="black" barStyle="default" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'white'},
            headerTintColor: 'black',
            contentStyle: {backgroundColor: 'gray'},
          }}>
          <stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryID;
            //   return{
            //     title: catId
            //   }
            // }}
          />
          <stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}
