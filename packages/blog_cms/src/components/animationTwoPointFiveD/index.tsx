import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const animationTwoPointFiveD: FC<IProps> = () => {
  return <div> animationTwoPointFiveD</div>
}

export default memo(animationTwoPointFiveD)
