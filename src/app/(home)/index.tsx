import { Link } from "expo-router";
import { FlatList, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, ButtonIcon } from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";

import { PokemonCard } from "./components/PokemonCard";

const POKEMON_LIST = [
  { name: "Pikachu", id: "#025", type: "electric" },
  { name: "Pikachu", id: "#026", type: "water" },
  { name: "Pikachu", id: "#027", type: "fire" },
  { name: "Pikachu", id: "#028", type: "fairy" },
];

const IMAGE = require("@assets/images/pikachu.png");

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="py-3 px-4 border-b border-gray-200 bg-content-white">
        <Image
          width={165}
          height={38}
          resizeMode="contain"
          source={require("@assets/images/logo.png")}
        />
      </View>

      <View className="mt-4 flex-1 px-4">
        <View className="flex-row gap-4 mt-4 mb-4">
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

        <FlatList
          className="mt-4"
          numColumns={2}
          data={POKEMON_LIST}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ gap: 16 }}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => (
            <View className="flex-1">
              <Link href="/pokemon-details" asChild>
                <PokemonCard
                  name={item.name}
                  id={item.id}
                  type={item.type}
                  image={IMAGE}
                />
              </Link>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
