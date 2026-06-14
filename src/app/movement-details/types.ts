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
  flavor_text: {
    flavor_text: string;
    language: { name: string; url: string };
    version_group: { name: string; url: string };
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
