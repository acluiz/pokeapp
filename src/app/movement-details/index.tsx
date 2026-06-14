import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-types";

import { useMoveDetails } from "./useMoveDetails";

import { InfosTable } from "./components/InfosTable";
import { Stats } from "./components/Stats";

const FALLBACK_COLORS: [string, string] = ["#9FA19F", "#B5B5A5"];

export default function MovementDetails() {
  const { movement, isLoading } = useMoveDetails();

  const typeName = movement?.type?.name ?? "electric";
  const colors = POKEMON_TYPE_COLORS[typeName.toLowerCase()] ?? FALLBACK_COLORS;
  const effects = movement?.flavor_text_entries.find(
    (e) => e.language.name === "en",
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {isLoading && <Text>loading...</Text>}

      {movement && (
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
              #{movement.id.toString().padStart(4, "0")}
            </Text>
            <Text className="mt-1 text-content-white text-3xl font-bold capitalize">
              {movement.name}
            </Text>

            <Badge
              label={movement.type.name}
              className="mt-3 bg-white/20 px-4"
              textClassName="capitalize"
            />
          </View>

          <View className="p-4 bg-surface rounded-tl-3xl rounded-tr-3xl flex-1">
            <Stats
              power={movement.power}
              pp={movement.pp}
              accuracy={movement.accuracy}
              color={colors[0]}
            />

            <View className="mt-4">
              <Text className="text-base text-content-label font-semibold">
                Descrição
              </Text>
              <Text className="text-sm mt-1 text-content-body">
                {effects?.flavor_text.replaceAll("\n", " ") || "--"}
              </Text>
            </View>

            <InfosTable
              damageClass={movement.damage_class.name}
              target={movement.target.name}
              generation={movement.generation.name}
            />
          </View>
        </LinearGradient>
      )}
    </SafeAreaView>
  );
}
