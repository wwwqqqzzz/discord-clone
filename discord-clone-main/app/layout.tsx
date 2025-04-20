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
  signIn: {
    start: {
      title: "登录",
      subtitle: "继续使用您的账户",
      actionText: "继续使用电子邮箱或用户名",
      socialButtonsBlockButton: "使用 {{provider}} 继续",
      alternativeMethods: {
        blockButton: "使用其他方式登录",
        separatorText: "或者",
      },
    },
    password: {
      title: "你好",
      subtitle: "输入您的密码继续",
      actionText: "输入您的密码",
      forgotPasswordLink: "忘记密码?",
      formButtonPrimary: "登录",
    },
  },
  signUp: {
    start: {
      title: "注册",
      subtitle: "创建一个账户",
      actionText: "继续使用电子邮箱",
      socialButtonsBlockButton: "使用 {{provider}} 注册",
      alternativeMethods: {
        blockButton: "使用其他方式注册",
        separatorText: "或者",
      },
    },
  },
  formFieldLabel__emailAddress: "电子邮箱",
  formFieldLabel__emailAddress_username: "电子邮箱或用户名",
  formFieldLabel__username: "用户名",
  formFieldLabel__password: "密码",
  formFieldInputPlaceholder__emailAddress: "your-email@example.com",
  formFieldInputPlaceholder__emailAddress_username: "your-email@example.com / username",
  formFieldInputPlaceholder__username: "username",
  formFieldInputPlaceholder__password: "密码",
  formButtonPrimary: "继续",
  footerActionLink__signIn: "登录",
  footerActionText__signIn: "已有账户?",
  footerActionLink__signUp: "点此注册",
  footerActionText__signUp: "还没有账号?",
  backButton: "返回",
  unstable__errors: {
    form_password_validation_failed: "密码不正确",
    passwordComplexity: {
      insufficientComplexity: "密码复杂度不足",
      digitRequired: "需要至少 {{requiredCount}} 个数字",
      lowercaseRequired: "需要至少 {{requiredCount}} 个小写字母",
      uppercaseRequired: "需要至少 {{requiredCount}} 个大写字母",
      symbolRequired: "需要至少 {{requiredCount}} 个特殊符号",
    },
  },
  formFieldError__notAMemberOfOrganization: "无法访问该组织",
  formFieldError__invalidStartCode: "无效的代码",
  formFieldError__invalidPassword: "无效的密码",
  formFieldError__invalidEmail: "无效的电子邮箱",
  formFieldError__invalidUsername: "无效的用户名",
  formFieldError__invalidEmailAddress: "无效的电子邮箱",
  formFieldError__invalidPhoneNumber: "无效的电话号码",
  formFieldError__invalidEmailOrPhoneNumber: "无效的电子邮箱或电话号码",
  formFieldError__invalidEmailOrUsername: "无效的电子邮箱或用户名",
  formFieldError__userNotFound: "用户不存在",
  formFieldError__verificationLinkExpired: "验证链接已过期",
  formFieldAction__forgotPassword: "忘记密码?",
  footerActionText__useAnotherMethod: "使用其他方式",
  or: "或",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider 
      localization={zhLocalization as any}
      appearance={{
        variables: {
          colorPrimary: "#5865F2",
          fontFamily: "Open Sans, sans-serif",
        },
        elements: {
          formButtonPrimary: "bg-[#5865F2] hover:bg-[#4752c4] focus:shadow-outline text-sm normal-case",
          formFieldInput: "border border-[#40444b] text-black",
          formFieldLabel: "font-medium",
          card: "",
          logoBox: "",
          logoImage: "",
          header: "",
          socialButtons: "",
          dividerRow: "",
          dividerText: "",
          formButtonReset: "",
          otpCodeFieldInput: "",
          footer: "",
          footerAction: ""
        }
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