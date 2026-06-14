import { Text } from "@/components/ui/text";
import { View } from "react-native";

import type { StatProps } from "./types";

export function Stat({ value, label, color }: StatProps) {
  return (
    <View className="flex-1 bg-content-white border-x-4 rounded-lg py-3 items-center shadow-sm" style={{ borderColor: color }}>
      <Text className="text-xl font-semibold text-content-body">{value}</Text>
      <Text className="text-xs font-semibold text-content-label">{label}</Text>
    </View>
  );
}
