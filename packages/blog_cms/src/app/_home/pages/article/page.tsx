import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PageArticle: FC<IProps> = () => {
  return <div> PageArticle</div>
}

PageArticle.displayName = 'PageArticle'

export default memo(PageArticle)
