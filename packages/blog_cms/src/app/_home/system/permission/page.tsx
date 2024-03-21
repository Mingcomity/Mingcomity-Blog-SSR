import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SystemPermission: FC<IProps> = () => {
  return <div> SystemPermission</div>
}

SystemPermission.displayName = 'SystemPermission'

export default memo(SystemPermission)
