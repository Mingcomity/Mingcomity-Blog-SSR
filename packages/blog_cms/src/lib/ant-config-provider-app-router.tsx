'use client'

import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'

const px2rem = px2remTransformer({
  rootValue: 10
})

interface IProps {
  children?: ReactNode
}

const AntConfigProviderAppRouter: FC<IProps> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: [theme.defaultAlgorithm]
        }}
      >
        <StyleProvider transformers={[px2rem]}>{children}</StyleProvider>
      </ConfigProvider>
    </AntdRegistry>
  )
}

export default memo(AntConfigProviderAppRouter)
