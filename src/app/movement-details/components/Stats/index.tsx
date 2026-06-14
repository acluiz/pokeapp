import { View } from "react-native";

import { Stat } from "./Stat";

import { StatsProps } from "./types";

export function Stats({ power, pp, accuracy }: StatsProps) {
  return (
    <View className="flex-row gap-3 mt-4">
      <Stat value={power?.toString() ?? "--"} label="PODER" />
      <Stat value={accuracy ? `${accuracy}%` : "--"} label="PRECISÃO" />
      <Stat value={pp.toString()} label="PP" />
    </View>
  );
}
