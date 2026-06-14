export interface IMove {
  id: number;
  name: string;
  type: { name: string; url: string };
  power: number | null;
  pp: number;
  accuracy: number | null;
  damage_class: { name: string; url: string };
  target: { name: string; url: string };
  generation: { name: string; url: string };
  effect_entries: {
    effect: string;
    short_effect: string;
    language: { name: string };
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
  }[];
}

export type MoveDetailsState = {
  movement: IMove | null;
  isLoading: boolean;
  error: string | null;
};
