import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { AntdRegistry } from '@ant-design/nextjs-registry'

interface IProps {
  children?: ReactNode
}

const Template: FC<IProps> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider locale={zhCN}>{children}</ConfigProvider>
    </AntdRegistry>
  )
}

export default memo(Template)
