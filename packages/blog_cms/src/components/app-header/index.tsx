import {
  FullscreenOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
  SunFilled,
  MoonFilled
} from '@ant-design/icons'
import {
  Button,
  Popover,
  Badge,
  Space,
  Avatar,
  Typography,
  Drawer,
  Flex,
  Segmented,
  theme,
  ColorPicker
} from 'antd'
import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWarpper } from './style'
import {
  IRootStore,
  shallowEqualApp,
  useAppDispatch,
  useAppSelector
} from '@/stores'
import {
  ModeEnum,
  setColorPrimary,
  setThemeAlgorithmType
} from '@/stores/feature/theme'
import { Color } from 'antd/es/color-picker'

const { Text } = Typography

interface IProps {
  children?: ReactNode
}

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

const AppHeader: FC<IProps> = () => {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  const { colorPrimary } = useAppSelector((rootState: IRootStore) => {
    return {
      colorPrimary: rootState.theme.colorPrimary
    }
  }, shallowEqualApp)
  const dispatch = useAppDispatch()

  // 模式变化
  const modeChange = (value: ModeEnum) => {
    dispatch(setThemeAlgorithmType(value))
  }
  // 主题色变化
  const colorPrimaryChange = (value: Color) => {
    dispatch(setColorPrimary(value.toHexString()))
  }
  return (
    <HeaderWarpper>
      <Button type="text">
        <FullscreenOutlined />
      </Button>
      <Popover content={content} trigger="click">
        <Button type="text">
          <Badge count={10} size="small">
            <MessageOutlined />
          </Badge>
        </Button>
      </Popover>
      <Popover content={content} trigger="click">
        <Button type="text">
          <Space className="space" size={6}>
            <Avatar size={26} icon={<UserOutlined />} />
            <Text>Mingcomity</Text>
          </Space>
        </Button>
      </Popover>
      <Button type="text" onClick={() => showDrawer()}>
        <SettingOutlined />
      </Button>
      <Drawer
        title="个性化配置"
        onClose={onClose}
        open={open}
        width={280}
        closeIcon={false}
      >
        <Flex vertical gap="large">
          <Space direction="vertical" size="small">
            <Text>整体风格</Text>
            <Segmented
              options={[
                {
                  label: '白昼',
                  value: ModeEnum.daytime,
                  icon: <SunFilled />
                },
                { label: '黑夜', value: ModeEnum.night, icon: <MoonFilled /> }
              ]}
              onChange={(value) => modeChange(value)}
            />
          </Space>
          <Space direction="vertical" size="small">
            <Text>自定义主题</Text>
            <ColorPicker
              defaultValue={colorPrimary}
              showText
              onChangeComplete={(value) => colorPrimaryChange(value)}
            />
          </Space>
        </Flex>
      </Drawer>
    </HeaderWarpper>
  )
}

AppHeader.displayName = 'AppHeader'

export default memo(AppHeader)
