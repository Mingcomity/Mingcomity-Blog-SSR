import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { IRootStore, shallowEqualApp, useAppSelector } from '@/stores'
import { ModeEnum } from '@/stores/feature/theme'

const px2rem = px2remTransformer({
  rootValue: 10
})

interface IProps {
  children?: ReactNode
}

const AntConfigProviderPageRouter: FC<IProps> = ({ children }) => {
  const { algorithmType, colorPrimary } = useAppSelector(
    (rootState: IRootStore) => {
      return {
        algorithmType: rootState.theme.algorithmType,
        colorPrimary: rootState.theme.colorPrimary
      }
    },
    shallowEqualApp
  )

  const getAlgorithm = () => {
    switch (algorithmType) {
      case ModeEnum.night:
        return theme.darkAlgorithm
      case ModeEnum.daytime:
        return theme.defaultAlgorithm
    }
  }

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: getAlgorithm(),
        token: {
          colorPrimary
        }
      }}
    >
      <StyleProvider transformers={[px2rem]}>{children}</StyleProvider>
    </ConfigProvider>
  )
}

export default memo(AntConfigProviderPageRouter)
