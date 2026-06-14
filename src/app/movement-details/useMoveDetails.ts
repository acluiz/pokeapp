import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { get } from "@/services/api";

import { IMove, MoveDetailsState } from "./types";

export function useMoveDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [state, setState] = useState<MoveDetailsState>({
    movement: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    if (!id) {
      router.replace("/");
      return;
    }

    getMove();
  }, [id]);

  const getMove = async () => {
    try {
      const movement = await get<IMove>(`/move/${id}`);
      setState({ movement, isLoading: false, error: null });
    } catch (err) {
      setState({
        movement: null,
        isLoading: false,
        error: (err as Error).message,
      });
    }
  };

  return { ...state };
}
