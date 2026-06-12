import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import { COLORS } from "./constants";

import { InfosTable } from "./components/InfosTable";
import { Stats } from "./components/Stats";
import { IPokemon } from "./types";

export default function MovementDetails() {
  const pokemon: IPokemon = {
    type: { name: "electric" },
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
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

          <Badge
            label="Elétrico"
            className="mt-3 bg-white/20 px-4"
            textClassName="text-sm"
          />
        </View>

        <View className="p-4 bg-surface rounded-tl-3xl rounded-tr-3xl flex-1">
          <Stats />

          <View className="mt-4">
            <Text className="text-base text-content-label font-semibold">
              Descrição
            </Text>
            <Text className="text-sm mt-1 text-content-body">
              An electrical attack that may paralyze the foe. Inflicts regular
              damage. Has a chance to paralyze the target.
            </Text>
          </View>

          <InfosTable />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
