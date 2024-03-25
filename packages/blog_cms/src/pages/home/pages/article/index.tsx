import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DataPage: FC<IProps> = () => {
  return <div> DataPage</div>
}

DataPage.displayName = 'DataPage'

export default memo(DataPage)
