import React from 'react';
import { View, Platform } from 'react-native';
import Colors from '../../utills/Colors'
import { LineChart } from "react-native-chart-kit";
import { width, height, } from 'react-native-dimension';

const Component = ({
  xLabels = ["", "1 Jul", "", "", "", "", "", "", "", "", "15 Jul", "", "", "", "", "", "", "", "", "", "30 Jul", "", ""],
  data = [
    Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100,
    Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100,
  ],
  driver
}) => {

  return (
    <LineChart
      data={{
        labels: xLabels,
        datasets: [
          {
            data: data
          }
        ]
      }}
      width={width(95)} // from react-native
      height={height(30)}
      yAxisLabel="$"
      // yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      withDots={false}
      chartConfig={{
        propsForBackgroundLines: {
          //   // x1: "0",
          //   // y1: "0",
          //   // x2: "0",
          //   // y2: "100",
          //   // stroke: "red",
          strokeWidth: "0"
        },
        // backgroundColor: Colors.backgroundColor,
        backgroundGradientFrom: Colors.backgroundColor,
        backgroundGradientTo: '#F9ECDC',
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => driver ? Colors.buttonSecondaryBlue : Colors.purplePrimary,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: width(3),
        },
        propsForDots: {
          r: "6",
          strokeWidth: "0",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        borderBottomLeftRadius: width(3),
        borderBottomRightRadius: width(3)
      }}
    />
  );
};

export default Component;
