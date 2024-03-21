import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DataVideo: FC<IProps> = () => {
  return <div> DataVideo</div>
}

DataVideo.displayName = 'DataVideo'

export default memo(DataVideo)
