import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Details() {
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
        <Link href="/">
          <View>
            <Text>list</Text>
          </View>
        </Link>
        <Link href="/movement-details">
          <View>
            <Text>movement details</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  );
}
