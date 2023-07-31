import React from "react";
import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { formatDateToMonthDay } from "../../utils/dateUtils"; 

interface TransactionCardInterface {
    name: string
    description: string
    cost: string
    date: string
}

export default function TransactionCard({name, description, cost, date}: TransactionCardInterface) {

  return (
    <View className="flex-1 justify-between items-center w-full max-h-20 bg-white flex-row rounded-xl shadow-sm shadow-gray-700/40 p-3 my-1">
      <View className="flex-row items-center">
      <View className="p-3 bg-orange-300 rounded-xl mr-4">
      <Feather name="shopping-bag" size={24} color="white" />
      </View>
      <View>
      <Text className="mb-1 font-bold">{name}</Text>
        <Text className="text-sm text-gray-400 font-semibold">{description}</Text>
      </View>
      </View>
      <View className="text-center">
        <Text className="mb-1 font-bold text-red-400 text-center">{cost}</Text>
        <Text className="text-sm text-gray-400 font-semibold">{formatDateToMonthDay(date)}</Text>
      </View>
    </View>
  );
}