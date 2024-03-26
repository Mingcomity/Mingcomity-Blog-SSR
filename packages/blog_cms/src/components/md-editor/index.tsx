import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import 'bytemd/dist/index.css'
import { Editor, Viewer } from '@bytemd/react'
import zhHans from 'bytemd/locales/zh_Hans.json'

import gfm from '@bytemd/plugin-gfm'
import breaks from '@bytemd/plugin-breaks'
import gemoji from '@bytemd/plugin-gemoji'
import highlight from '@bytemd/plugin-highlight-ssr'
import math from '@bytemd/plugin-math-ssr'
import medium from '@bytemd/plugin-medium-zoom'
import mermaid from '@bytemd/plugin-mermaid'
import frontmatter from '@bytemd/plugin-frontmatter'

const plugins = [
  // {
  //   viewerEffect({ file }: any) {
  //     if (typeof file.value != 'object') return
  //     const $style = document.createElement('style')
  //     try {
  //       $style.innerHTML =
  //         themes[file.value.frontmatter.theme]?.style ?? themes.juejin.style
  //     } catch (e) {
  //       $style.innerHTML = themes.juejin.style
  //     }
  //     document.querySelector('.markdown-body')?.appendChild($style)
  //     return () => {
  //       $style.remove()
  //     }
  //   }
  // },
  breaks(),
  frontmatter(),
  gemoji(),
  gfm(),
  highlight(),
  math(),
  medium(),
  mermaid()
]

interface IProps {
  children?: ReactNode
  editorId: string
  className?: string
  mdValue: string
  setMdValue: (value: string) => void
}

const MdEditor: FC<IProps> = ({
  editorId,
  className = '',
  mdValue,
  setMdValue
}) => {
  return (
    <Editor
      locale={zhHans}
      value={mdValue}
      plugins={plugins}
      onChange={setMdValue}
    />
  )
}

export default memo(MdEditor)
