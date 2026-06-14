import { useEffect, useState } from "react";

import { useLocalSearchParams, useRouter } from "expo-router";

import { get } from "@/services/api";

import { IPokemon, PokemonDetailsState } from "./types";

export function usePokemonDetails() {
  const [state, setState] = useState<PokemonDetailsState>({
    pokemon: null,
    isLoading: true,
    error: null,
  });

  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      router.replace("/");
      return;
    }

    getPokemon();
  }, [id]);

  const getPokemon = async () => {
    try {
      const pokemon = await get<IPokemon>(`/pokemon/${id}`);
      console.log(pokemon);
      setState({ pokemon, isLoading: false, error: null });
    } catch (err) {
      setState({
        pokemon: null,
        isLoading: false,
        error: (err as Error).message,
      });
    }
  };

  return { ...state };
}
