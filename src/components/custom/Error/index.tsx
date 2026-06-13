import { Text, View } from "react-native";
import Svg, { Circle, Line, Path } from "react-native-svg";
import { IErrorProps } from "./types";

function PokeballIcon() {
  return (
    <Svg width={80} height={80} viewBox="0 0 80 80">
      <Circle cx={40} cy={40} r={38} fill="#D1D1D1" />
      <Path d="M2,40 A38,38 0 0,1 78,40 Z" fill="#B0B0B0" />
      <Line x1={2} y1={40} x2={78} y2={40} stroke="#9E9E9E" strokeWidth={4} />
      <Circle cx={40} cy={40} r={13} fill="#9E9E9E" />
      <Circle cx={40} cy={40} r={8} fill="#D1D1D1" />
      <Circle
        cx={40}
        cy={40}
        r={13}
        fill="none"
        stroke="#9E9E9E"
        strokeWidth={2}
      />
    </Svg>
  );
}

export function Error({ title, description }: IErrorProps) {
  return (
    <View className="flex-1 items-center justify-center p-16">
      <PokeballIcon />

      <Text className="font-bold text-base text-center mt-4 text-content-label">
        {title}
      </Text>

      <Text className="text-sm text-center mt-2 text-content-body">
        {description}
      </Text>
    </View>
  );
}
