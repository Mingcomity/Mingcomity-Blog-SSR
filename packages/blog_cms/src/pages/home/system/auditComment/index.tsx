import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SystemAuditComment: FC<IProps> = () => {
  return <div> SystemAuditComment</div>
}

SystemAuditComment.displayName = 'SystemAuditComment'

export default memo(SystemAuditComment)
