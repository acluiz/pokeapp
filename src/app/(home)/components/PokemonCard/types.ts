import type { ImageSourcePropType, PressableProps } from "react-native";

export type PokemonCardProps = PressableProps & {
  id: string;
  name: string;
  type: string;
  image: ImageSourcePropType;
};
