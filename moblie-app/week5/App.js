import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
const MealsNavigator = createNativeStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigations
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator
        initialRouteName="Home page"
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c" },
          headerTintColor: "#fff",
        }}
      >
        <MealsNavigator.Screen name="Home page" component={CategoriesScreen} />
        <MealsNavigator.Screen name="Menu" component={CategoryMealsScreen} />
        <MealsNavigator.Screen name="S3" component={MealDetailScreen} />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
});
