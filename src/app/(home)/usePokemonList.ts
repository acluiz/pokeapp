import { useEffect, useState } from "react";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-types";
import { get } from "@/services/api";

import {
  PokemonDetail,
  PokemonListItem,
  PokemonListResponse,
  PokemonListState,
} from "./types";

const POKEMON_TYPES = Object.keys(POKEMON_TYPE_COLORS);

export const LIMIT = 20;

export function usePokemonList() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [search, setSearch] = useState("");

  const [state, setState] = useState<PokemonListState>({
    data: { count: 0, previous: "", next: "", results: [] },
    isLoading: true,
    error: null,
  });

  const isLastPage = state.data?.next === null;

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

  const onSearch = async () => {
    const normalized = search.trim().toLowerCase();
    if (!normalized) {
      await getPokemons();
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const data = await get<PokemonDetail>(`/pokemon/${normalized}`);

      const item: PokemonListItem = {
        name: data.name,
        url: `https://pokeapi.co/api/v2/pokemon/${data.id}/`,
      };

      setPokemons([item]);
      setState({ data: null, isLoading: false, error: null });
    } catch (err) {
      setOffset(0);
      setPokemons([]);
      setState({ data: null, isLoading: false, error: (err as Error).message });
    }
  };

  return {
    search,
    pokemons,
    ...state,
    isLastPage,
    getParsedDetails,
    getPokemons,
    setSearch,
    onSearch,
  };
}
