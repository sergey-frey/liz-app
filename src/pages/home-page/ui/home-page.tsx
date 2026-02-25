import { MessageCard } from "@/entities/message";
import { cardsAtom } from "@/entities/message/lib/cards-store";
import { cn } from "@/shared/utils/cn";
import { useAtomValue } from "jotai";
import { Link } from "wouter";

const text =
  "открывай эти карточки с умом и в нужный момент. Они должны приносить тебе только радость и напоминать о том, что я тебя люблю и всегда рядом ♥️";

export const HomePage = () => {
  const cards = useAtomValue(cardsAtom);

  const textContent = () => {
    return text;
  };

  return (
    <main className={cn("min-h-dvh text-contrast p-3", "flex flex-col gap-10")}>
      <div className={cn("flex flex-col gap-2")}>
        <h1 className="text-2xl font-bold">Дорогая моя Лизонька</h1>
        <p className="text-lg max-w-lg">{textContent()}</p>
      </div>

      <ul className={cn("grid gap-4", "sm:grid-cols-2", "xl:grid-cols-4")}>
        {cards.map((card) => (
          <li key={card.id}>
            <Link to={`/message/${card.id}`}>
              <MessageCard card={card} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
