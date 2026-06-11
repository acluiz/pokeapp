import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon, ArrowRightIcon, Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

import { COLORS, MOVEMENTS, MOVEMENT_TYPES } from "./constants";

import { IPokemon } from "./types";

export default function Details() {
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

          <Text className="text-content-white-dim text-sm">#004</Text>
          <Text className="mt-1 text-content-white text-3xl font-bold">
            Pikachu
          </Text>

          <Badge
            label="Elétrico"
            className="mt-3 bg-white/20 px-4"
            textClassName="text-sm"
          />
        </View>

        <View className="p-4 bg-surface rounded-tl-3xl rounded-tr-3xl flex-1">
          <View className="mt-4">
            <Text className="text-base text-content-label font-semibold">
              Movimentos
            </Text>
          </View>

          <View className="mt-4 gap-3">
            {MOVEMENTS.map((movement) => {
              const type = MOVEMENT_TYPES[movement.method];

              return (
                <Link
                  key={movement.name}
                  href="/movement-details"
                  className="w-full"
                >
                  <View
                    className={`flex-row items-center bg-content-white rounded-xl border-x-4 px-4 py-3 ${type.card}`}
                  >
                    <View className="flex-1">
                      <Text className="text-base font-bold text-content-body">
                        {movement.name}
                      </Text>

                      <Badge
                        label={type.label}
                        className={`mt-2 ${type.badge}`}
                        textClassName="text-sm"
                      />
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
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
