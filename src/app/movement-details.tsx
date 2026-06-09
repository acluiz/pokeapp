import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovementDetails() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-4 py-3 border-b border-gray-200">
        <Image
          width={165}
          height={38}
          resizeMode="contain"
          source={require("@assets/images/logo.png")}
        />
      </View>

      <View>
        <Link href="/details">
          <View>
            <Text>Description</Text>
            <Text>
              An electrical attack that may paralyze the foe. Inflicts regular
              damage. Has a chance to paralyze the target.
            </Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}
