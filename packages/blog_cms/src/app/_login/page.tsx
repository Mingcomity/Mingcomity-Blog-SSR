import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { PageWrapper } from './style'
import classNames from 'classnames'
import LoginForm from '@/components/loginForm'
import AnimationTwoPointFiveD from '@/components/loginSvg'
interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  return (
    <PageWrapper>
      <div className={classNames('animationBox')}>
        <AnimationTwoPointFiveD />
      </div>
      <div className={classNames('loginFormBox')}>
        <h1 className={classNames('title')}>博客管理系统</h1>
        <LoginForm />
      </div>
    </PageWrapper>
  )
}

Login.displayName = 'Login'

export default memo(Login)
