import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";

import { get } from "@/services/api";

import { MOVEMENT_TYPES } from "./constants";

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

  const getMoveType = (item: IPokemon["moves"][number]) => {
    const moveDetails = item.version_group_details[0];
    const method = moveDetails?.move_learn_method.name;

    const type = MOVEMENT_TYPES[method];

    const isLevelMethod = type.id === "level-up";
    const levelLabel = `${type.label} ${moveDetails.level_learned_at}`;
    const label = isLevelMethod ? levelLabel : type.label;

    const urlParts = item.move.url.split("/");
    const id = urlParts[urlParts.length - 2];

    return {
      id,
      type,
      name: item.move.name,
      label: label,
    };
  };

  return { ...state, getMoveType };
}
