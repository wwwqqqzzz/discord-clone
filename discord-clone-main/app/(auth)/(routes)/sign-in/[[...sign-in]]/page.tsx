import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

interface Labels {
  signInTitle: string;
  signInSubtitle: string;
}

interface Theme {
  baseTheme: any;
  variables: {
    colorPrimary: string;
    colorBackground: string;
    colorInputBackground: string;
    colorInputText: string;
    colorTextSecondary: string;
  };
  elements: {
    rootBox: string;
    card: string;
    headerTitle: string;
    headerSubtitle: string;
    socialButtonsBlockButton: string;
    socialButtonsBlockButtonText: string;
    formFieldLabel: string;
    formFieldInput: string;
    formButtonPrimary: string;
    dividerLine: string;
    dividerText: string;
    footerActionText: string;
    footerActionLink: string;
    logoBox: { display: string };
  };
  labels: Labels;
}

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
                <span className="text-white text-3xl font-bold">n</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Talk
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
            baseTheme: undefined,
            variables: {
              colorPrimary: "#5865F2",
              colorBackground: "#2f3136",
              colorInputBackground: "#40444b",
              colorInputText: "#dcddde",
              colorTextSecondary: "#72767d",
            },
            elements: {
              rootBox: "bg-transparent",
              card:
                "bg-[#2f3136]/95 border border-[#40444b] shadow-2xl rounded-2xl backdrop-blur-xl",
              headerTitle: "text-white text-2xl font-semibold text-center",
              headerSubtitle: "text-[#b9bbbe] text-sm text-center",
              socialButtonsBlockButton:
                "bg-[#36393f] hover:bg-[#40444b] border-none text-[#dcddde] rounded-lg",
              socialButtonsBlockButtonText: "text-[#dcddde] font-medium",
              formFieldLabel: "text-[#dcddde] text-sm font-medium",
              formFieldInput:
                "bg-[#40444b] border border-[#40444b] text-[#dcddde] focus:ring-2 focus:ring-[#5865F2] focus:border-[#5865F2] rounded-lg",
              formButtonPrimary:
                "bg-gradient-to-r from-[#5865F2] to-[#7289da] hover:from-[#4752c4] hover:to-[#5865F2] text-white font-medium rounded-lg",
              dividerLine: "bg-[#40444b] opacity-25",
              dividerText: "text-[#b9bbbe] text-xs",
              footerActionText: "text-[#b9bbbe] text-sm",
              footerActionLink: "text-[#5865F2] hover:text-[#7289da]",
              logoBox: { display: "none" },
            },
          } as any}
        />
      </div>
    </div>
  );
}
