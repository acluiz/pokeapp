import { View } from "react-native";

import { Skeleton } from "@/components/ui/skeleton";

export const Loader = () => {
  return (
    <View className="flex-1">
      <View className="px-4 pt-6 pb-8">
        <Skeleton className="w-5 h-5 rounded-md mb-4" />

        <View className="gap-3">
          <Skeleton className="w-14 h-4 rounded-md" />
          <Skeleton className="w-44 h-10 rounded-md" />
          <Skeleton className="w-24 h-7 rounded-full" />
        </View>
      </View>

      <View className="p-4 flex-1 gap-3 bg-surface rounded-tl-3xl rounded-tr-3xl">
        <Skeleton className="w-32 h-5 rounded-md mb-1" />

        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-16 rounded-xl" />
        ))}
      </View>
    </View>
  );
};
