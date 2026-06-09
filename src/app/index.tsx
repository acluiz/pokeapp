import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonIcon } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icon";

export default function App() {
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

      <View className="flex-row gap-4 px-4 mt-4">
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
    </SafeAreaView>
  );
}
