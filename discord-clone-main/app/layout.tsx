import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider  } from "@clerk/nextjs";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={{socialButtonsBlockButton: "使用 {{provider}} 继续",
      signIn: {
        start: {
          title: "登录",
          subtitle: "继续使用您的账户",
          actionText: "没有账户？",
          actionLink: "注册"
        },
        emailLink: {
          title: "检查您的电子邮件",
          subtitle: "点击发送到您邮箱的链接以登录",
          formTitle: "魔法链接",
          formSubtitle: "我们将向您发送一个魔法链接以登录",
          backButton: "使用其他方式登录",
          resendButton: "重新发送链接"
        },
        password: {
          title: "欢迎回来",
          subtitle: "请输入您的密码继续",
          actionText: "忘记密码？",
          actionLink: "重置密码"
        },
        emailCode: {
          title: "检查您的电子邮件",
          subtitle: "我们已向您发送了一个验证码",
          formTitle: "验证码",
          formSubtitle: "输入发送到您邮箱的验证码",
          backButton: "使用其他方式登录"
        },
        phoneCode: {
          title: "检查您的手机",
          subtitle: "我们已向您发送了一个验证码",
          formTitle: "验证码",
          formSubtitle: "输入发送到您手机的验证码",
          backButton: "使用其他方式登录"
        },
        reset: {
          title: "重置密码",
          subtitle: "我们将向您发送重置密码的链接",
          backButton: "返回登录"
        }
      },
      signUp: {
        start: {
          title: "创建账户",
          subtitle: "创建一个新账户",
          actionText: "已有账户？",
          actionLink: "登录"
        },
        emailLink: {
          title: "检查您的电子邮件",
          subtitle: "点击发送到您邮箱的链接以注册",
          formTitle: "魔法链接",
          formSubtitle: "我们将向您发送一个魔法链接以注册",
          backButton: "使用其他方式注册",
          resendButton: "重新发送链接"
        },
        continue: {
          title: "完成注册",
          subtitle: "继续创建您的账户"
        },
        emailCode: {
          title: "检查您的电子邮件",
          subtitle: "我们已向您发送了一个验证码",
          formTitle: "验证码",
          formSubtitle: "输入发送到您邮箱的验证码",
          backButton: "使用其他方式注册"
        },
        phoneCode: {
          title: "检查您的手机",
          subtitle: "我们已向您发送了一个验证码",
          formTitle: "验证码",
          formSubtitle: "输入发送到您手机的验证码",
          backButton: "使用其他方式注册"
        }
      },
      userProfile: {
        title: "账户设置",
        subtitle: "管理您的账户设置",
        profileSection: "个人资料",
        accountSection: "账户"
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
      footerActionLink__terms: "服务条款",
      formFieldLabel__emailAddress: "电子邮件",
      formFieldLabel__phoneNumber: "手机号码",
      formFieldLabel__password: "密码",
      formFieldLabel__firstName: "名字",
      formFieldLabel__lastName: "姓氏",
      formFieldLabel__username: "用户名",
      formFieldLabel__emailCode: "验证码",
      formFieldLabel__phoneCode: "验证码",
      formFieldInputPlaceholder__emailAddress: "name@example.com",
      formFieldInputPlaceholder__password: "您的密码",
      formFieldInputPlaceholder__firstName: "名字",
      formFieldInputPlaceholder__lastName: "姓氏",
      formFieldInputPlaceholder__username: "用户名",
      formFieldError__notMatchingPasswords: "密码不匹配",
      formFieldAction__forgotPassword: "忘记密码？",
      formFieldAction__showPassword: "显示",
      formFieldAction__hidePassword: "隐藏",
      formFieldHintText__optional: "可选"
    }}>
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
