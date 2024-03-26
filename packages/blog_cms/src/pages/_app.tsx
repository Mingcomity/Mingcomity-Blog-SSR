// type
import type { AppProps } from 'next/app'

// 全局样式
import '@/assets/css/global.css'

import Layout from '@/components/layout'
import ThemeStyle from '@/lib/theme-style'
import AntConfigProviderPageRouter from '@/lib/ant-config-provider-page-router'
import wrapper from '@/stores'
import { Provider } from 'react-redux'
import AppHeader from '@/components/app-header'

// 每次点击刷新浏览器器会执行，如果是在前端路由导航不会触发执行
export default function App({
  Component,
  ...rest
}: AppProps & {
  Component: {
    type: {
      displayName: string
    }
  }
}) {
  const cn = Component.type.displayName

  // Redux 接入 App
  const { store, props } = wrapper.useWrappedStore(rest)

  if (cn === 'Login') {
    return (
      <Provider store={store}>
        <AntConfigProviderPageRouter>
          <ThemeStyle>
            <Component {...props.pageProps} />
          </ThemeStyle>
        </AntConfigProviderPageRouter>
      </Provider>
    )
  }
  // else if (cn === 'ArticleIssue') {
  //   return (
  //     <Provider store={store}>
  //       <AntConfigProviderPageRouter>
  //         <ThemeStyle>
  //           <AppHeader />
  //           <Component {...props.pageProps} />
  //         </ThemeStyle>
  //       </AntConfigProviderPageRouter>
  //     </Provider>
  //   )
  // }
  else {
    return (
      <Provider store={store}>
        <AntConfigProviderPageRouter>
          <ThemeStyle>
            <Layout>
              <Component {...props.pageProps} />
            </Layout>
          </ThemeStyle>
        </AntConfigProviderPageRouter>
      </Provider>
    )
  }
}
