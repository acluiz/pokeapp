import { View } from "react-native";
import { Stat } from "./Stat";

export function Stats() {
  return (
    <View className="flex-row gap-3 mt-4">
      <Stat value="40" label="PODER" />
      <Stat value="100%" label="PRECISÃO" />
      <Stat value="30" label="PP" />
    </View>
  );
}
