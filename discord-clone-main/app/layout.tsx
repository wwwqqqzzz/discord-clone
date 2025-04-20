import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";

import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Chat Application",
  description: "A Discord Clone in Next.js",
};

// 定义中文本地化对象
const zhLocalization = {
  socialButtonsBlockButton: "使用 {{provider}} 继续",
  signIn: {
    start: {
      title: "登录",
      subtitle: "继续使用您的账户",
      actionLink: "注册"
    },
    emailLink: {
      title: "检查您的电子邮件",
      subtitle: "点击发送到您邮箱的链接以登录"
    },
    password: {
      title: "欢迎回来",
      subtitle: "请输入您的密码继续"
    },
    forgotPassword: {
      title: "重置密码", 
      subtitle: "我们将向您发送重置密码的链接"
    }
  },
  signUp: {
    start: {
      title: "创建账户",
      subtitle: "创建一个新账户",
      actionLink: "登录"
    },
    continue: {
      title: "完成注册",
      subtitle: "继续创建您的账户"
    }
  },
  userButton: {
    action__signOut: "退出登录",
    action__manageAccount: "管理账户",
    action__addAccount: "添加账户"
  },
  formButtonPrimary: "继续",
  formButtonReset: "取消",
  backButton: "返回",
  footerActionLink__privacy: "隐私政策",
  footerActionLink__terms: "服务条款"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider 
      // 使用类型断言来绕过TypeScript的类型检查
      localization={zhLocalization as any}>
      <html lang="zh-CN" suppressHydrationWarning>
        <body className={cn(
          font.className,
          "bg-white dark:bg-[#313338] text-black dark:text-white transition-colors duration-200"
          )}>
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="discord-theme"
          >
            <SocketProvider>
              <ModalProvider />  
              <QueryProvider>
                {children}
              </QueryProvider> 
            </SocketProvider>
          </ThemeProvider>
        </body>
     </html>
    </ClerkProvider>
  );
}