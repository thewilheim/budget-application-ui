import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import "../../styles.css";
export default function HomeScreen() {
  const userInformation = () => {
    return (
      <View className="flex-1 flex-row items-center max-h-16">
        <View className="flex-1 flex-row items-center">
          <Ionicons name="person" size={34} color="black" />
          <Text className="ml-4">Hey, William!</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
    );
    }
    const expenseBox = () => {
      return(
        <View className="flex-1 justify-evenly flex-row items-center max-h-24 ">
          <View className="flex-1 flex-row bg-green-400 p-4 max-w-40 rounded-xl items-center justify-between m-1 shadow">
            <View>
              <Text className="text-white mb-1">Income</Text>
              <Text className="text-white text-lg font-bold">$2,321.00</Text>
            </View>
            <Ionicons name="ios-trending-up-outline" size={34} color="white" />
          </View>
          <View className="flex-1 flex-row bg-red-400 p-4 max-w-40 rounded-xl items-center justify-between m-1 shadow ">
            <View>
              <Text className="text-white mb-1">Expense</Text>
              <Text className="text-white text-lg font-bold">-$421.00</Text>
            </View>
            <Ionicons name="ios-trending-down-outline" size={34} color="white" />
          </View>
        </View>
      )
    }
    const balanceBox = () => {
      return(
        <View className="flex-1 justify-center items-center max-h-20 my-6">
          <Text className="text-3xl font-bold mb-2 tracking-wider">$4,500</Text>
          <Text className="font-semibold text-slate-400 tracking-wide">Total Balance</Text>
        </View>
      )
    }
  return <View className="flex-1 p-4">
    {userInformation()}
    {balanceBox()}
    {expenseBox()}
  </View>;
}
