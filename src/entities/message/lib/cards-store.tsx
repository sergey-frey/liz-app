import { atom } from "jotai";
import type { Card } from "../types/message";

export const cardsAtom = atom<Card[]>([
  {
    id: "1",
    topContent: "Да прибудет",
    bottomContent: "с тобой сила",
    icon: "💪",
  },
]);
