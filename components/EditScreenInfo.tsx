import React from "react";
import { Dimensions } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";
import { View } from "./Themed";
import partidos from "@/data/partidos";

export default function EditScreenInfo({ path }: { path: string }) {

  const labelsChart = partidos.map(partido => partido.name.split(' ')[0]);
  const dataChart = partidos.map(partido => partido.votos);

  return (
    <View>
      <LineChart
        data={{
          labels: labelsChart,
          datasets: [
            {
              data: dataChart
            },
          ],
        }}
        width={Dimensions.get("window").width}
        height={520}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#D8BAEC",
          backgroundGradientFrom: "#AF7AC5",
          backgroundGradientTo: "#EBDEF0",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 6,
          },
          propsForDots: {
            r: "9",
            strokeWidth: "2",
            stroke: "#512E5F",
          },
        }}
        bezier
        style={{
          marginVertical: 2,
          borderRadius: 20
        }}
      />
    </View>
  );
}
