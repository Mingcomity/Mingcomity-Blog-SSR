import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PageHome: FC<IProps> = () => {
  return <div> PageHome</div>
}

PageHome.displayName = 'PageHome'

export default memo(PageHome)
