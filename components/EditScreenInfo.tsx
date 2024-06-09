import React from "react";
import { Dimensions } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";
import { Text, View } from "./Themed";
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
          backgroundGradientFrom: "#078884",
          backgroundGradientTo: "#D3AAEF",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
