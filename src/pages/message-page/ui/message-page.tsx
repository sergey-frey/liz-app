import { messagesAtom } from "@/entities/message";
import { cn } from "@/shared/utils/cn";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useAtomValue } from "jotai";
import { Link, useParams } from "wouter";
import styles from "../styles/animation.module.css";

export const MessagePage = () => {
  const id = useParams<{ id: string }>().id;

  const messages = useAtomValue(messagesAtom);

  const message = messages.find((message) => message.id === id);

  if (!message) {
    return <div>Message not found</div>;
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <header className={cn("flex items-center gap-4")}>
        <Link to="/" asChild>
          <button
            className={cn(
              "p-2.5 rounded-xl",
              "bg-accent-400 shadow",
              "cursor-pointer",
            )}
          >
            <ArrowUturnLeftIcon className="w-5 h-5" />
          </button>
        </Link>

        <h1 className={cn("text-xl")}>{message.title}</h1>
      </header>
      <main className={cn("mt-10", "flex-1 flex items-center justify-center")}>
        <article
          className={cn(
            "relative rounded-4xl p-6 w-full max-w-xl min-h-128",
            "bg-accent-600 text-background shadow-2xl",
            "text-xl",
            "flex flex-col gap-6",
            styles.message,
          )}
        >
          {message.content}
        </article>
      </main>
    </div>
  );
};
