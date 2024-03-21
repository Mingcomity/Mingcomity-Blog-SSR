'use client'
import {
  FullscreenOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Button, Popover, Badge, Space, Avatar, Typography, Drawer } from 'antd'
import { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWarpper } from './style'

const { Text, Title } = Typography

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
        title="项目配置"
        onClose={onClose}
        open={open}
        width={280}
        closeIcon={false}
      >
        <div>
          <Text>整体风格</Text>
        </div>
      </Drawer>
    </HeaderWarpper>
  )
}

AppHeader.displayName = 'AppHeader'

export default memo(AppHeader)
