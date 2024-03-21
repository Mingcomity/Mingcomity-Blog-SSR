import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PageVideo: FC<IProps> = () => {
  return <div> PageVideo</div>
}

PageVideo.displayName = 'PageVideo'

export default memo(PageVideo)
