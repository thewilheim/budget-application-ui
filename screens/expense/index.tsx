import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit'
export default function ExpenseScreen() {
  const expensesLineChart = () => {
    return(
      <LineChart
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June","Jul"],
        datasets: [
          {
            data: [
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10,
              Math.random() * 10
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#F8F9FA",
        backgroundGradientFrom: "#F8F9FA",
        backgroundGradientTo: "#F8F9FA",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(244,159,159, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(244,159,159, ${opacity})`,
        style: {
          borderRadius: 0
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
    )
  }
    return (
      <View className='flex-1 bg-[#F8F9FA]'>
        <Text>Expenses</Text>
        {expensesLineChart()}
      </View>
    );
  }