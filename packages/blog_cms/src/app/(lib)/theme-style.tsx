'use client'

import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { theme } from 'antd'
import { ThemeProvider } from 'styled-components'

const { useToken } = theme

interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = ({ children }) => {
  const { token } = useToken()

  const mixin = {
    flexCenter: `
      display: flex;
      align-items: center;
    `
  }

  const theme = {
    primaryColor: token.colorPrimary,
    mixin
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default memo(Template)
