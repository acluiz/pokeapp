export type MoveLearnMethod =
  | "level-up"
  | "egg"
  | "tutor"
  | "machine"
  | "stadium-surfing-pikachu"
  | "light-ball-egg"
  | "colosseum-purification"
  | "xd-shadow"
  | "xd-purification"
  | "form-change"
  | "zygarde-cube";

export interface IPokemon {
  id: number;
  name: string;
  types: { slot: number; type: { name: string; url: string } }[];
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      move_learn_method: { name: MoveLearnMethod };
    }[];
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export type PokemonDetailsState = {
  pokemon: IPokemon | null;
  isLoading: boolean;
  error: string | null;
};
