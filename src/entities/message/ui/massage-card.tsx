import { cn } from "@/shared/utils/cn";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { Card } from "../types/message";

type MessageCardProps = PropsWithClassName & {
  card: Card;
};

export const MessageCard = ({ card, className }: MessageCardProps) => {
  return (
    <article
      className={cn(
        "aspect-square rounded-4xl",
        "bg-accent-600 text-background shadow-2xl",
        "grid grid-rows-3",
        "p-4",
        "lg:p-6",
        "hover:scale-95 transition-transform transition-timing-function-ease-in-out",
        className,
      )}
    >
      <p className={cn("text-4xl self-start", "lg:text-5xl")}>
        {card.topContent}
      </p>

      <div
        className={cn(
          "self-center justify-self-center",
          "text-8xl",
          "md:text-9xl",
        )}
      >
        {card.icon}
      </div>

      <p className={cn("text-4xl self-end", "lg:text-5xl")}>
        {card.bottomContent}
      </p>
    </article>
  );
};
