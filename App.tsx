import React, { useState } from "react";
import { Text, View } from "react-native";
import TransactionCard from "./components/transactionCard";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";
import TransactionScreen from "./screens/transaction";
import ExpenseScreen from "./screens/expense";
import { NativeWindStyleSheet } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { AppContextProvider } from "./context/appContext";
import CreateTransaction from "./components/CreateTransaction";
import { createStackNavigator } from "@react-navigation/stack";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();
const AppTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Expense") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Expense":
              iconName = focused ? "stats-chart" : "stats-chart-outline";
              break;
            case "Add Transaction":
              iconName = focused ? "add-circle" : "add-circle-outline";
              size = 42;

            default:
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Add Transaction"
        component={TransactionScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate("CreateTransaction");
          },
        })}
      />
      <Tab.Screen name="Expense" component={ExpenseScreen} />
    </Tab.Navigator>
  );
};
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ animationEnabled: false, headerShown:false, presentation: 'transparentModal'}}>
      <RootStack.Screen name='AppTabs' component={AppTabStack}/>
      <RootStack.Screen
        name="CreateTransaction"
        component={CreateTransaction}
        options={{animationEnabled: true}}
      />
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </AppContextProvider>
  );
}
