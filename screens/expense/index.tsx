import * as React from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import TransactionCard from "../../components/transactionCard";
import { useAppData } from "../../context/appData";
import {
  filterByTransactionDate,
  filterByTransactionByTimeframe,
} from "../../utils/dateUtils";

export default function ExpenseScreen() {
  const { transactions } = useAppData();
  const [filteredTransactions, setFilteredTransactions] =
  React.useState(transactions);
  const [query, setQuery] = React.useState("all");

  React.useEffect(() => {
    timeFrameOption(query)
  },[query])

  const transactionCategories = () => {
    return (
      <View className="flex-1 flex-row">
        <Button title="All" onPress={() => setQuery('all')} />
        <Button title="Day" onPress={() => setQuery('day')} />
        <Button title="Week" onPress={() => setQuery('week')} />
        <Button title="Month" onPress={() => setQuery('month')} />
      </View>
    );
  };

  const timeFrameOption = (
    query: string,
    customStartDate: string = "",
    customEndDate: string = ""
  ) => {
    if (query === "all" || query === "") {
      return setFilteredTransactions(transactions);
    } else if (query === "custom") {
      return filterByTransactionByTimeframe(
        transactions,
        setFilteredTransactions,
        customStartDate,
        customEndDate
      );
    } else {
      return filterByTransactionDate(
        query,
        transactions,
        setFilteredTransactions
      );
    }
  };

  const transactionDetails = () => {
    return (
      <View className="mt-4">
        <Text className="text-xl mb-5 font-bold">Recent Transactions</Text>
        <View className="mb-5">
          <Text className="mb-5">Today</Text>
          {filteredTransactions.map((item) => {
            return (
              <TransactionCard
                key={item.id}
                name={item.name}
                cost={item.cost}
                description={item.description}
                date={item.date}
              />
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 p-4 justify-evenly overflow-auto bg-[#F8F9FA]">
          {transactionCategories()}
          {transactionDetails()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
