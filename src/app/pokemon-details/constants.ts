import type { MoveLearnMethod } from "./types";

type MovementConfig = {
  id: string;
  label: string;
  card: string;
  badge: string;
};

export const MOVEMENT_TYPES: Record<MoveLearnMethod, MovementConfig> = {
  tutor: {
    id: "tutor",
    label: "Tutor",
    card: "border-method-tutor",
    badge: "bg-method-tutor",
  },
  "level-up": {
    id: "level-up",
    label: "Nível",
    card: "border-method-level",
    badge: "bg-method-level",
  },
  machine: {
    id: "machine",
    label: "MT/MO",
    card: "border-method-mt",
    badge: "bg-method-mt",
  },
  egg: {
    id: "egg",
    label: "Ovo",
    card: "border-method-egg",
    badge: "bg-method-egg",
  },
  "stadium-surfing-pikachu": {
    id: "stadium",
    label: "Estádio",
    card: "border-method-stadium",
    badge: "bg-method-stadium",
  },
  "light-ball-egg": {
    id: "lightball",
    label: "Bola de Luz",
    card: "border-method-lightball",
    badge: "bg-method-lightball",
  },
  "colosseum-purification": {
    id: "purification",
    label: "Purificação",
    card: "border-method-purification",
    badge: "bg-method-purification",
  },
  "xd-shadow": {
    id: "shadow",
    label: "Sombra XD",
    card: "border-method-shadow",
    badge: "bg-method-shadow",
  },
  "xd-purification": {
    id: "purification",
    label: "Purif. XD",
    card: "border-method-purification",
    badge: "bg-method-purification",
  },
  "form-change": {
    id: "formchange",
    label: "Forma",
    card: "border-method-formchange",
    badge: "bg-method-formchange",
  },
  "zygarde-cube": {
    id: "zygarde",
    label: "Cubo Zygarde",
    card: "border-method-zygarde",
    badge: "bg-method-zygarde",
  },
};
