import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import { Stat } from "./components/Stat";

import { COLORS } from "./constants";

import { IPokemon } from "./types";

export default function MovementDetails() {
  const pokemon: IPokemon = {
    type: { name: "electric" },
  };

  return (
    <SafeAreaView className="flex-1">
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}
        colors={COLORS[pokemon.type.name]}
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
            <Icon as={ArrowLeftIcon} className="text-content-white" size="xl" />
          </Link>

          <Text className="text-content-white-dim text-sm">#84</Text>
          <Text className="mt-1 text-content-white text-3xl font-bold">
            Thunder-shock
          </Text>

          <View className="mt-3 self-start bg-white/20 px-4 py-1 rounded-full">
            <Text className="text-content-white text-sm">Elétrico</Text>
          </View>
        </View>

        <View className="p-4 bg-surface rounded-tl-3xl rounded-tr-3xl flex-1">
          <View className="flex-row gap-3 mt-4">
            <Stat value="40" label="PODER" />
            <Stat value="100%" label="PRECISÃO" />
            <Stat value="30" label="PP" />
          </View>

          <View className="mt-4">
            <Text className="text-base text-content-label font-semibold">
              Descrição
            </Text>
            <Text className="text-sm mt-1 text-content-body">
              An electrical attack that may paralyze the foe. Inflicts regular
              damage. Has a chance to paralyze the target.
            </Text>
          </View>

          <View className="mt-4 rounded-xl border border-border-subtle bg-content-white overflow-visible">
            <View className="flex-row justify-between px-4 py-3">
              <Text className="text-sm text-content-label font-semibold">
                Categoria
              </Text>
              <Text className="text-sm text-content-label">Especial</Text>
            </View>

            <View className="flex-row justify-between px-4 py-3 border-t border-border-subtle">
              <Text className="text-sm text-content-label font-semibold">
                Alvo
              </Text>
              <Text className="text-sm text-content-label">
                Pokémon selecionado
              </Text>
            </View>

            <View className="flex-row justify-between px-4 py-3 border-t border-border-subtle">
              <Text className="text-sm text-content-label font-semibold">
                Geração
              </Text>
              <Text className="text-sm text-content-label">I</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
