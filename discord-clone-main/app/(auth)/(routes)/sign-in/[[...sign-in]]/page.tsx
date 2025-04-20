import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-[#18191c]">
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2] to-[#7289da] opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#5865F2] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#7289da] opacity-10 blur-3xl"></div>
        <div className="relative h-full flex flex-col justify-center items-center p-12">
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-[#5865F2] rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">N</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              NexTalk
            </h1>
          </div>
          <div className="text-center max-w-md">
            <p className="text-[#b9bbbe] text-lg md:text-xl mb-8">
              连接世界，分享生活，加入我们的社交平台，开始您的社交之旅。
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-[#2f3136]/50 backdrop-blur-sm border border-[#40444b] rounded-xl p-4 flex flex-col items-center">
                <div className="text-3xl mb-2">💬</div>
                <h3 className="text-[#dcddde] font-medium">实时聊天</h3>
              </div>
              <div className="bg-[#2f3136]/50 backdrop-blur-sm border border-[#40444b] rounded-xl p-4 flex flex-col items-center">
                <div className="text-3xl mb-2">👥</div>
                <h3 className="text-[#dcddde] font-medium">建立社区</h3>
              </div>
              <div className="bg-[#2f3136]/50 backdrop-blur-sm border border-[#40444b] rounded-xl p-4 flex flex-col items-center">
                <div className="text-3xl mb-2">🎮</div>
                <h3 className="text-[#dcddde] font-medium">游戏互动</h3>
              </div>
              <div className="bg-[#2f3136]/50 backdrop-blur-sm border border-[#40444b] rounded-xl p-4 flex flex-col items-center">
                <div className="text-3xl mb-2">🔊</div>
                <h3 className="text-[#dcddde] font-medium">语音频道</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <SignIn
          appearance={{
            baseTheme: undefined, // 移除基础主题以完全应用自定义样式
            variables: {
              colorPrimary: "#5865F2", // 使用左侧面板的主色调
              colorBackground: "#2f3136", // 卡片的深色背景
              colorInputBackground: "#40444b",
              colorInputText: "#dcddde",
              colorText: "#b9bbbe", // 较浅的文本颜色以提高可读性
              colorTextSecondary: "#72767d",
            },
            elements: {
              rootBox: "bg-transparent", // 如果需要，使根元素透明
              card: "bg-[#2f3136]/95 border border-[#40444b] shadow-xl rounded-xl backdrop-blur-xl", // 匹配卡片样式
              headerTitle: "text-white text-3xl font-bold",
              headerSubtitle: "text-[#b9bbbe]",
              socialButtonsBlockButton:
                "bg-[#36393f] hover:bg-[#40444b] border-[#40444b] text-[#dcddde]",
              socialButtonsBlockButtonText: "text-[#dcddde]",
              formFieldLabel: "text-[#dcddde]",
              formFieldInput:
                "bg-[#40444b] border-[#40444b] text-[#dcddde] focus:ring-[#5865F2] focus:border-[#5865F2] rounded-md", // 添加圆角
              formButtonPrimary:
                "bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-md", // 添加圆角
              dividerLine: "bg-[#40444b]",
              dividerText: "text-[#b9bbbe]",
              footerActionText: "text-[#b9bbbe]",
              footerActionLink: "text-[#5865F2] hover:text-[#7289da]",
              // footer: { display: "none" }, // 上次尝试
              logoBox: { display: "none" }, // 尝试隐藏可能包含徽章的 logoBox
            },
          }}
        />
      </div>
    </div>
  );
}
