import React, { useState } from "react";
import { Text, View } from "react-native";
import TransactionCard from "./components/transactionCard";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";
import TransactionScreen from "./screens/transaction";
import ExpenseScreen from "./screens/expense";
import { NativeWindStyleSheet } from "nativewind";
import { Ionicons } from '@expo/vector-icons'; 
import { AppContextProvider } from "./context/appContext";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Expense" component={ExpenseScreen} />
          <Tab.Screen name="Add Transaction" component={TransactionScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}
