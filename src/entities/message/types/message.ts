import type { ReactNode } from "react";

export type Message = {
  id: string;
  title: string;
  content: ReactNode;
};

export type Card = {
  id: string;
  topContent: string;
  bottomContent: string;
  icon: ReactNode;
};
