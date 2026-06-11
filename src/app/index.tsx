import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonIcon } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <View className="py-3 px-4 border-b border-gray-200 bg-content-white">
        <Image
          width={165}
          height={38}
          resizeMode="contain"
          source={require("@assets/images/logo.png")}
        />
      </View>

      <View className="px-4">
        <View className="flex-row gap-4 mt-4">
          <Input size="xl" variant="outline" className="flex-1">
            <InputSlot className="pl-3">
              <InputIcon as={SearchIcon} />
            </InputSlot>

            <InputField placeholder="Buscar por nome" />
          </Input>

          <Button variant="solid" size="xl" action="primary">
            <ButtonIcon as={SearchIcon} />
          </Button>
        </View>

        <View>
          <Link href="/pokemon-details">
            <View>
              <Text>details</Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
