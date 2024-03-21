'use client'

import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Checkbox, Button } from 'antd'

import classNames from 'classnames'
import { FromWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const LoginFrom: FC<IProps> = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  return (
    <FromWrapper>
      <Form
        name="normal_login"
        className={classNames('login-form')}
        initialValues={{ remember: true }}
        onFinish={() => onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="options">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            游客登录
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </FromWrapper>
  )
}

LoginFrom.displayName = 'LoginFrom'

export default memo(LoginFrom)
