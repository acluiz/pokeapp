import { View } from "react-native";

import { Stat } from "./Stat";

import { StatsProps } from "./types";

export function Stats({ power, pp, accuracy, color }: StatsProps) {
  return (
    <View className="flex-row gap-3 mt-4">
      <Stat value={power?.toString() ?? "--"} label="PODER" color={color} />
      <Stat value={accuracy ? `${accuracy}%` : "--"} label="PRECISÃO" color={color} />
      <Stat value={pp.toString()} label="PP" color={color} />
    </View>
  );
}
