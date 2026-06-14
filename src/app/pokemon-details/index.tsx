import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import { Loader } from "@/components/custom/Loader";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-types";

import { usePokemonDetails } from "./usePokemonDetails";

const FALLBACK_COLORS: [string, string] = ["#9FA19F", "#B5B5A5"];

export default function Details() {
  const { pokemon, isLoading, getMoveType } = usePokemonDetails();

  const typeName = pokemon?.types?.[0]?.type?.name ?? "--";
  const colors = POKEMON_TYPE_COLORS[typeName.toLowerCase()] ?? FALLBACK_COLORS;

  return (
    <SafeAreaView className="flex-1 bg-white">
      {isLoading && <Loader />}

      {pokemon && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
          colors={colors}
        >
          <View className="py-3 px-4 border-b border-gray-200 bg-content-white">
            <Image
              width={165}
              height={38}
              resizeMode="contain"
              source={require("@assets/images/logo.png")}
            />
          </View>

          <View className="px-4 pt-6 pb-8 overflow-hidden">
            <Link href="/" className="mb-4">
              <Icon
                size="xl"
                as={ArrowLeftIcon}
                className="text-content-white"
              />
            </Link>

            <Text className="text-content-white-dim text-sm">
              #{pokemon.id.toString().padStart(4, "0")}
            </Text>
            <Text className="mt-1 text-content-white text-3xl font-bold capitalize">
              {pokemon.name}
            </Text>

            <Badge
              label={typeName}
              className="mt-3 bg-white/20 px-4"
              textClassName="capitalize"
            />
          </View>

          <View className="p-4 bg-surface rounded-tl-3xl rounded-tr-3xl flex-1">
            <View className="mt-4">
              <Text className="text-base text-content-label font-semibold">
                Movimentos
              </Text>
            </View>

            <ScrollView className="mt-4" contentContainerStyle={{ gap: 12 }}>
              {pokemon.moves.map((item) => {
                const { id, name, type, label } = getMoveType(item);

                return (
                  <Link
                    key={name}
                    href={{
                      pathname: "/movement-details",
                      params: { id },
                    }}
                    className="w-full"
                  >
                    <View
                      className={`flex-row items-center bg-content-white rounded-xl border-x-4 px-4 py-3 ${type.card}`}
                    >
                      <View className="flex-1">
                        <Text className="text-base font-bold text-content-body capitalize">
                          {name}
                        </Text>

                        <Badge label={label} className={`mt-2 ${type.badge}`} />
                      </View>

                      <Icon
                        size="sm"
                        as={ArrowRightIcon}
                        className="text-content-label"
                      />
                    </View>
                  </Link>
                );
              })}
            </ScrollView>
          </View>
        </LinearGradient>
      )}
    </SafeAreaView>
  );
}
