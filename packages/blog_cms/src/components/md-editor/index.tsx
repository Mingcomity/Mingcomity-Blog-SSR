import { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import { useState } from 'react'
import { MdCatalog, MdEditor, MdPreview } from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'
import { shallowEqualApp, useAppSelector } from '@/stores'
import { ModeEnum } from '@/stores/feature/theme'
import { DropdownToolbar, InsertContentGenerator } from 'md-editor-rt'
import { SkinTwoTone } from '@ant-design/icons'
import { Button } from 'antd'
import { DownOptionsWarpper } from './style'

interface IProps {
  children?: ReactNode
  editorId: string
  className?: string
  mdValue: string
  setMdValue: (value: string) => void
}

interface MyToolbarProps {
  insert?: (generator: InsertContentGenerator) => void
  setTheme: (value: TypeMdTheme) => void
}

type TypeMdTheme =
  | 'default'
  | 'github'
  | 'vuepress'
  | 'mk-cute'
  | 'smart-blue'
  | 'cyanosis'

const MyToolbar = ({ insert = () => {}, setTheme }: MyToolbarProps) => {
  const [visible, setVisible] = useState(false)
  const themeArr: TypeMdTheme[] = [
    'default',
    'github',
    'vuepress',
    'mk-cute',
    'smart-blue',
    'cyanosis'
  ]
  return (
    <DropdownToolbar
      visible={visible}
      onChange={setVisible}
      overlay={
        <DownOptionsWarpper>
          {themeArr.map((value) => {
            return (
              <li key={value} className="item">
                <Button
                  type="text"
                  size="small"
                  onClick={() => setTheme(value)}
                >
                  {value}
                </Button>
              </li>
            )
          })}
        </DownOptionsWarpper>
      }
      trigger={<SkinTwoTone />}
      key="emoji-toolbar"
    />
  )
}

const MdEditorComponent: FC<IProps> = ({
  editorId,
  className = '',
  mdValue,
  setMdValue
}) => {
  // 主题
  const [mdTheme, setMdTheme] = useState<TypeMdTheme>('default')
  const { algorithmType } = useAppSelector(
    (state) => ({
      algorithmType: state.theme.algorithmType
    }),
    shallowEqualApp
  )
  // 黑夜模式切换
  function getTheme() {
    switch (algorithmType) {
      case ModeEnum.daytime:
        return 'light'
      case ModeEnum.night:
        return 'dark'
    }
  }

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    isClient && (
      <MdEditor
        className={className}
        autoDetectCode
        toolbars={[
          'bold',
          'underline',
          'italic',
          '-',
          'strikeThrough',
          'sub',
          'sup',
          'quote',
          'unorderedList',
          'orderedList',
          'task',
          '-',
          'codeRow',
          'code',
          'link',
          'image',
          'table',
          'mermaid',
          'katex',
          '-',
          'revoke',
          'next',
          'save',
          '-',
          0,
          '=',
          'pageFullscreen',
          'fullscreen',
          'preview',
          'htmlPreview',
          'catalog'
        ]}
        defToolbars={[<MyToolbar key="theme" setTheme={setMdTheme} />]}
        previewTheme={mdTheme}
        modelValue={mdValue}
        onChange={setMdValue}
        theme={getTheme()}
        editorId={editorId}
        onSave={(v, h) => {
          console.log(v, 'v')
          h.then((html) => {
            console.log(html, 'html')
          })
        }}
        onGetCatalog={(list: any) => {
          console.log(list)
        }}
      />
    )
  )
}

MdEditorComponent.displayName = 'MdEditorComponent'

export default memo(MdEditorComponent)
