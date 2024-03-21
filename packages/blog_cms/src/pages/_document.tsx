import React from 'react'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { ServerStyleSheet } from 'styled-components'
// 这个四个属性是必须的
import Document, { Head, Html, Main, NextScript } from 'next/document'
import type { DocumentContext } from 'next/document'

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="用于管理博客的一个后台" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="hy-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // style-commponents支持
  const sheet = new ServerStyleSheet()

  // antd 支持
  const cache = createCache()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          {/* style-commponents支持 */}
          {sheet.collectStyles(<App {...props} />)}
        </StyleProvider>
      )
    })

  const initialProps = await Document.getInitialProps(ctx)
  const style = extractStyle(cache, true)
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    )
  }
}

export default MyDocument
