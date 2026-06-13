export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonListState = {
  data: PokemonListResponse | null;
  isLoading: boolean;
  error: string | null;
};
