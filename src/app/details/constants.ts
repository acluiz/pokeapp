export const COLORS: Record<string, [string, string]> = {
  electric: ["#C4A61D", "#F1CC1E"],
};

export const MOVEMENT_TYPES = {
  tutor: { label: "Tutor", card: "border-method-tutor", badge: "bg-method-tutor" },
  level: { label: "Nível 1", card: "border-method-level", badge: "bg-method-level" },
  machine: { label: "MT/MO", card: "border-method-mt", badge: "bg-method-mt" },
};

export const MOVEMENTS: { name: string; method: keyof typeof MOVEMENT_TYPES }[] = [
  { name: "Thunderbold", method: "machine" },
  { name: "Thunder-shock", method: "level" },
  { name: "Volt-tackle", method: "tutor" },
];
