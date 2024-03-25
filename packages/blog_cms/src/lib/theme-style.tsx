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
  const {
    token: {
      colorPrimary: primaryColor,
      colorBgContainer: bgWhiteColor,
      colorText: fontBlackColor,
      borderRadiusLG,
      colorBorderSecondary
    }
  } = useToken()

  const mixin = {
    flexCenter: `
      display: flex;
      align-items: center;
    `,
    flexCenterBetween: `
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    flexCenterCenter: `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    flexCenterEnd: `
      display: flex;
      align-items: center;
      justify-content: flex-end;
    `,
    flexStartStartColumn: `
      display: flex;
      flex-direction: column;
    `,
    bgImgSelfAdaption: `
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-size: cover;
    `
  }

  const theme = {
    primaryColor,
    bgWhiteColor,
    fontBlackColor,
    borderRadiusLG: borderRadiusLG + 'px',
    colorBorderSecondary,
    mixin
  }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default memo(Template)
