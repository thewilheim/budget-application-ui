import { View, Text, TextInput, Button } from "react-native";
import React, { useState, useContext } from "react";
import { useAppData } from "../context/appData";

const CustomInput = ({ title, setEvent, value }) => {
  return (
    <View className="flex-1 flex-col justify-start px-2">
      <Text className="my-2 font-semibold">{title}</Text>
      <TextInput
        className="rounded-sm p-4 bg-white border"
        onChangeText={setEvent}
        value={value}
      />
    </View>
  );
};

export default function CreateTransaction({ navigation }) {
  const {saveTransactions} = useAppData()
  const [name, setName] = useState("Useless Text");
  const [cost, setCost] = useState("Useless Text");
  const [desc, setDesc] = useState("Useless Text");
  const [category, setCategory] = useState("Useless Text");
  const [date, setDate] = useState("Useless Text");

  function onSave(): void {
    saveTransactions({name: name, cost: cost, description: desc, date: date, category: category})
    navigation.goBack()
  }

  return (
<View className="flex-1 bg-slate-600/60 justify-center items-center">
<View className="h-1/2 w-[95%] bg-white shadow-lg shadow-black/25 rounded-2xl">
      <View className="flex-1 p-4 justify-evenly">
        <Text className="font-bold text-xl mb-2">Add Transaction</Text>
        <View className="flex-1 flex-row">
          <CustomInput title="Name" setEvent={setName} value={name} />
          <CustomInput title="Cost" setEvent={setCost} value={cost} />
        </View>
        <View className="flex-1 flex-row">
          <CustomInput title="Category" setEvent={setCategory} value={category} />
          <CustomInput title="Date" setEvent={setDate} value={date} />
        </View>
        <CustomInput title="Description" setEvent={setDesc} value={desc} />
        <View className="flex-1 flex-row justify-between">
          <Button title="Cancel" onPress={() => navigation.goBack()} />
          <Button title="Save" onPress={() => onSave()} />
        </View>
      </View>
    </View>
</View>
  );
}
