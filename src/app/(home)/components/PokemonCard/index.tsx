import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text } from "react-native";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-types";

import type { PokemonCardProps } from "./types";

const FALLBACK_COLORS: [string, string] = ["#9FA19F", "#B5B5A5"];

export function PokemonCard({ id, name, type, image, ...rest }: PokemonCardProps) {
  const colors = POKEMON_TYPE_COLORS[type.toLowerCase()] ?? FALLBACK_COLORS;

  return (
    <Pressable className="rounded-2xl overflow-hidden h-[130px]" {...rest}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          paddingInline: 12,
          paddingBlock: 16,
          justifyContent: "space-between",
        }}
      >
        <Text className="text-white font-bold text-base">{name}</Text>
        <Text className="text-white/70 text-xs">#{id.padStart(4, "0")}</Text>

        <Image
          source={image}
          resizeMode="contain"
          className="absolute right-1 bottom-1 w-[80px] h-[80px]"
        />
      </LinearGradient>
    </Pressable>
  );
}
