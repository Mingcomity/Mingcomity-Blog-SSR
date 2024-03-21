import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SystemUser: FC<IProps> = () => {
  return <div> SystemUser</div>
}

SystemUser.displayName = 'SystemUser'

export default memo(SystemUser)
