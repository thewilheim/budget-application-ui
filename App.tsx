import React from "react";
import { Text, View } from "react-native";
import TransactionCard from "./components/TransactionCard";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/home";
import TransactionScreen from "./screens/transaction";
import ExpenseScreen from "./screens/expense";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});
import "./styles.css";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Expense" component={ExpenseScreen} />
        <Tab.Screen name="Add Transaction" component={TransactionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}