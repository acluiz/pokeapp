import { useEffect, useState } from "react";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-types";
import { get } from "@/services/api";

import {
  PokemonListItem,
  PokemonListResponse,
  PokemonListState,
} from "./types";

const POKEMON_TYPES = Object.keys(POKEMON_TYPE_COLORS);

const LIMIT = 20;

export function usePokemonList() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);

  const [state, setState] = useState<PokemonListState>({
    data: { count: 0, previous: "", next: "", results: [] },
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const data = await get<PokemonListResponse>(
        `/pokemon?limit=${LIMIT}&offset=${offset}`,
      );

      setPokemons((prev) => [...prev, ...(data?.results || [])]);

      setState({ data, isLoading: false, error: null });
      setOffset((prev) => prev + LIMIT);
    } catch (err) {
      setState({ data: null, isLoading: false, error: (err as Error).message });
    }
  };

  const getParsedDetails = (item: PokemonListItem) => {
    const urlParts = item.url.split("/");

    const id = urlParts[urlParts.length - 2];
    const type = POKEMON_TYPES[Number(id) % POKEMON_TYPES.length];

    return { id, type };
  };

  return { pokemons, ...state, getParsedDetails, getPokemons };
}
