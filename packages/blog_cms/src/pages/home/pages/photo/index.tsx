import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PagePhoto: FC<IProps> = () => {
  return <div> PagePhoto</div>
}

PagePhoto.displayName = 'PagePhoto'

export default memo(PagePhoto)
