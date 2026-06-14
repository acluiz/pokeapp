import { Link } from "expo-router";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from "@/components/ui/button";
import { CloseIcon, SearchIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";

import { Error } from "@/components/custom/Error";

import { PokemonCard } from "./components/PokemonCard";

import { usePokemonList } from "./usePokemonList";

export default function App() {
  const {
    search,
    pokemons,
    error,
    isLoading,
    isLastPage,
    getParsedDetails,
    getPokemons,
    setSearch,
    onSearch,
  } = usePokemonList();

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

            <InputField
              placeholder="Buscar por nome"
              value={search}
              onChangeText={setSearch}
            />

            {search.length > 0 && (
              <InputSlot className="pr-3" onPress={() => setSearch("")}>
                <InputIcon as={CloseIcon} />
              </InputSlot>
            )}
          </Input>

          <Button variant="solid" size="xl" action="primary" onPress={onSearch}>
            {isLoading && <ButtonSpinner />}
            {!isLoading && <ButtonIcon as={SearchIcon} />}
          </Button>
        </View>

        {isLoading && pokemons.length === 0 && (
          <View>
            <Text>loading...</Text>
          </View>
        )}

        {!isLoading && error && (
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
              <>
                {pokemons.length > 1 && !isLastPage && (
                  <Button
                    variant="solid"
                    action="primary"
                    className="mt-4"
                    onPress={getPokemons}
                  >
                    {isLoading && <ButtonSpinner />}
                    {!isLoading && <ButtonText>Carregar mais</ButtonText>}
                  </Button>
                )}
              </>
            }
            renderItem={({ item }) => {
              const { id, type } = getParsedDetails(item);

              return (
                <View className="flex-1">
                  <Link
                    asChild
                    href={{
                      pathname: "/pokemon-details",
                      params: { id },
                    }}
                  >
                    <PokemonCard
                      id={id}
                      type={type}
                      name={item.name}
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
