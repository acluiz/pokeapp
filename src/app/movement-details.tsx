import { Text } from "@/components/ui/text";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovementDetails() {
  return (
    <SafeAreaView className="flex-1">
      <View className="py-3 px-4 border-b border-gray-200 bg-content-white">
        <Image
          width={165}
          height={38}
          resizeMode="contain"
          source={require("@assets/images/logo.png")}
        />
      </View>

      <View className="p-4 bg-surface rounded-tl-3xl rounded-tr-3xl">
        <View className="flex-row gap-3 mt-4">
          <View className="flex-1 bg-content-white border-x-4 border-border-accent rounded-lg py-3 items-center">
            <Text className="text-xl font-semibold text-content-body">40</Text>
            <Text className="text-xs font-semibold text-content-label">
              PODER
            </Text>
          </View>

          <View className="flex-1 bg-content-white border-x-4 border-border-accent rounded-lg py-3 items-center">
            <Text className="text-xl font-semibold text-content-body">
              100%
            </Text>
            <Text className="text-xs font-semibold text-content-label">
              PRECISÃO
            </Text>
          </View>

          <View className="flex-1 bg-content-white border-x-4 border-border-accent rounded-lg py-3 items-center">
            <Text className="text-xl font-semibold text-content-body">30</Text>
            <Text className="text-xs font-semibold text-content-label">PP</Text>
          </View>
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

        <View className="mt-4 rounded-xl border border-border-subtle bg-content-white overflow-hidden">
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
    </SafeAreaView>
  );
}
