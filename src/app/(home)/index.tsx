import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import { SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";

import { Error } from "@/components/custom/Error";

import { PokemonCard } from "./components/PokemonCard";

import { usePokemonList } from "./usePokemonList";

export default function App() {
  const { pokemons, error, isLoading, getParsedDetails, getPokemons } =
    usePokemonList();

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

      <View className="flex-1 mt-4 px-4">
        <View className="flex-row gap-4">
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

        {isLoading && pokemons.length === 0 && (
          <View>
            <Text>loading...</Text>
          </View>
        )}

        {!isLoading && pokemons.length === 0 && (
          <Error
            title="Nenhum Pokémon encontrado."
            description="Parece que esse Pokémon está escondido em outra região."
          />
        )}

        {pokemons.length > 0 && (
          <FlatList
            className="mt-4"
            numColumns={2}
            data={pokemons}
            keyExtractor={(item) => item.url}
            columnWrapperStyle={{ gap: 16 }}
            contentContainerStyle={{ gap: 16 }}
            ListFooterComponent={
              <Button
                variant="solid"
                action="primary"
                className="mt-4"
                onPress={getPokemons}
              >
                {isLoading && <ButtonSpinner />}
                {!isLoading && <ButtonText>Carregar mais</ButtonText>}
              </Button>
            }
            renderItem={({ item }) => {
              const { id, type } = getParsedDetails(item);

              return (
                <View className="flex-1">
                  <Link
                    href={{ pathname: "/pokemon-details", params: { id } }}
                    asChild
                  >
                    <PokemonCard
                      name={item.name}
                      type={type}
                      id={id}
                      image={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                      }}
                    />
                  </Link>
                </View>
              );
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
