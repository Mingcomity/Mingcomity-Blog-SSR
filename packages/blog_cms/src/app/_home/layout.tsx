'use client'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import React, { useState } from 'react'

import { LayoutWarpper } from './style'

import {
  DesktopOutlined,
  PieChartOutlined,
  SettingOutlined,
  BankTwoTone
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme, Typography } from 'antd'
import { usePathname } from 'next/navigation'
import AppHeader from './_c-pns/app-header'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItemLink(link: string, label: string): ReactNode {
  return <Link href={link}>{label}</Link>
}

function getItem(
  label: ReactNode,
  key: React.Key,
  icon?: ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const { Title } = Typography

const items: MenuItem[] = [
  getItem('页面管理', '1', <DesktopOutlined />, [
    getItem(getItemLink('/home/pages/home', '首页'), '/home/pages/home'),
    getItem(getItemLink('/home/pages/article', '文章'), '/home/pages/article'),
    getItem(getItemLink('/home/pages/photo', '图片库'), '/home/pages/photo'),
    getItem(getItemLink('/home/pages/video', '视频库'), '/home/pages/video')
  ]),
  getItem('数据管理', '6', <PieChartOutlined />, [
    getItem(
      getItemLink('/home/datas/article', '文章管理'),
      '/home/datas/article'
    ),
    getItem(getItemLink('/home/datas/photo', '图片管理'), '/home/datas/photo'),
    getItem(getItemLink('/home/datas/video', '视频管理'), '/home/datas/video')
  ]),
  getItem('系统管理', '10', <SettingOutlined />, [
    getItem(getItemLink('/home/system/user', '用户管理'), '/home/system/user'),
    getItem(
      getItemLink('/home/system/permission', '权限管理'),
      '/home/system/permission'
    ),
    getItem(
      getItemLink('/home/system/auditComment', '评论审核'),
      '/home/system/auditComment'
    )
  ])
]

interface IProps {
  children?: ReactNode
}

const HomeLayout: FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  const pathName = usePathname()

  return (
    <LayoutWarpper>
      <Layout>
        <Sider
          breakpoint="lg"
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="sider"
        >
          <div className="logoBox">
            <BankTwoTone className="icon" title="博客后台管理" />
            {collapsed || (
              <Title level={1} className="title">
                博客后台管理
              </Title>
            )}
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={[pathName]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header className="header">
            <AppHeader />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </LayoutWarpper>
  )
}

HomeLayout.displayName = 'HomeLayout'

export default memo(HomeLayout)
