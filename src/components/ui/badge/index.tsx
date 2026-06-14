import { Text } from "@/components/ui/text";
import { View } from "react-native";

interface BadgeProps {
  label: string;
  className?: string;
  textClassName?: string;
}

export function Badge({ label, className, textClassName }: BadgeProps) {
  return (
    <View className={`self-start px-3 py-1 rounded-full ${className}`}>
      <Text className={`text-sm text-content-white ${textClassName}`}>
        {label}
      </Text>
    </View>
  );
}
