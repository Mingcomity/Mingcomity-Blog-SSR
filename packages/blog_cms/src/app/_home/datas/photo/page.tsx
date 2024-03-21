import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DataPhoto: FC<IProps> = () => {
  return <div> DataPhoto</div>
}

DataPhoto.displayName = 'DataPhoto'

export default memo(DataPhoto)
