import type { Metadata } from 'next'

import '@/assets/css/global.css'

// style-commpents 与 next 结合
import StyledComponentsRegistry from './(lib)/registry-style'
// style-commpents 中的 theme
import ThemeStyle from './(lib)/theme-style'
// antd 配置以及ssr处理方案
import AntConfigProvider from './(lib)/ant-config-provider'

export const metadata: Metadata = {
  title: '博客后台管理',
  description: '用于管理博客的一个后台'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AntConfigProvider>
          <StyledComponentsRegistry>
            <ThemeStyle>{children}</ThemeStyle>
          </StyledComponentsRegistry>{' '}
        </AntConfigProvider>
      </body>
    </html>
  )
}
