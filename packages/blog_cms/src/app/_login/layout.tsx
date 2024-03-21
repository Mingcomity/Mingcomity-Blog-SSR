import { Metadata } from 'next'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
export const metadata: Metadata = {
  title: '登录-博客后台管理',
  description: '登录Mingcomity的博客的后台管理'
}

interface IProps {
  children?: ReactNode
}

const LoginLayout: FC<IProps> = ({ children }) => {
  return <>{children}</>
}

LoginLayout.displayName = 'LoginLayout'

export default memo(LoginLayout)
