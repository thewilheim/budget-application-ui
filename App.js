import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Homepage from "./pages/Homepage";
import CreateTransaction from "./pages/CreateTransaction";
import { AppContextProvider } from "./context/appContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
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
                case "Transaction":
                  iconName = focused ? "add-circle" : "add-circle-outline";
                  size = 42;
                  break;
                case "Wallet":
                  iconName = focused ? "wallet" : "wallet-outline";
                  break;
                case "Account":
                  iconName = focused ? "person" : "person-outline";
                  break;

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
          <Tab.Screen name="Home">
            {(props) => <Homepage {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Expense">
            {(props) => <CreateTransaction {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Transaction">
            {(props) => <CreateTransaction {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Wallet">
            {(props) => <CreateTransaction {...props} />}
          </Tab.Screen>
          <Tab.Screen name="Account">
            {(props) => <CreateTransaction {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
