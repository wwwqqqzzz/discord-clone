import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  type: "channel" | "conversation";
  name: string;
}

export const ChatWelcome = ({
  type,
  name,
}:ChatWelcomeProps) => {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
          <Hash className="h-12 w-12 text-white"/>
        </div>
      )}
      <p className="text-xl md:text-3xl font-bold">
        {type === "channel" ? `欢迎来到 #` : ""}{name}
      </p>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type === "channel" ? `这是 ${name} 频道的开始，发送一条消息开始聊天吧。` : `这是与 ${name} 对话的开始，发送一条消息开始聊天吧。`}
      </p>
    </div>
  );
}