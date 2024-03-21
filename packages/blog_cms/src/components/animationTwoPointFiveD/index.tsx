import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AnimationWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const animationTwoPointFiveD: FC<IProps> = () => {
  return (
    <AnimationWrapper>
      <div className="maxCon">
        <div className="pbs-move">
          <img
            className="ban-polygons1"
            src="/images/2.5DAnimation/ban-polygons1.png"
          />
          <img
            className="ban-polygons2"
            src="/images/2.5DAnimation/ban-polygons2.png"
          />
          <img
            className="ban-polygons3"
            src="/images/2.5DAnimation/ban-polygons3.png"
          />
          <img
            className="move-center1"
            src="/images/2.5DAnimation/ban-center-tu1.png"
          />
          <div className="move-center-rectangles">
            <div></div>
          </div>
          <div className="move-center-heyslim">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <img
            className="move-center2"
            src="/images/2.5DAnimation/ban-center-tu2.png"
          />
          <img
            className="ban-center-tu3"
            src="/images/2.5DAnimation/ban-left-line.png"
          />
          <img
            className="ban-center-tu13"
            src="/images/2.5DAnimation/ban-center-line.png"
          />
          <img
            className="ban-center-tu23"
            src="/images/2.5DAnimation/ban-right-line.png"
          />
          <img
            className="ban-center-tu4"
            src="/images/2.5DAnimation/ban-center-tu4.png"
          />
          <div className="small-circle1"></div>
          <div className="small-circle2"></div>
          <img
            className="move-left2"
            src="/images/2.5DAnimation/ban-left-tu2.png"
          />
          <div className="move-left-path">
            <img
              className="ban-left-path1"
              src="/images/2.5DAnimation/ban-left-tu3.png"
            />
            <img
              className="ban-left-path2"
              src="/images/2.5DAnimation/ban-right-tu9.png"
            />
          </div>
          <img
            className="move-left1"
            src="/images/2.5DAnimation/ban-left-tu1.png"
          />
          <img
            className="ban-line1"
            src="/images/2.5DAnimation/ban-line1.png"
          />
          <img
            className="ban-line2"
            src="/images/2.5DAnimation/ban-line1.png"
          />
          <img
            className="ban-line3"
            src="/images/2.5DAnimation/ban-line1.png"
          />
          <img
            className="ban-line4"
            src="/images/2.5DAnimation/ban-line1.png"
          />
          <img
            className="ban-left-icon1"
            src="/images/2.5DAnimation/ban-left-icon1.png"
          />
          <img
            className="ban-left-icon2"
            src="/images/2.5DAnimation/ban-left-icon2.png"
          />
          <img
            className="ban-left-icon3"
            src="/images/2.5DAnimation/ban-left-icon3.png"
          />
          <img
            className="ban-left-icon4"
            src="/images/2.5DAnimation/ban-left-icon4.png"
          />
          <img
            className="ban-left-icon5"
            src="/images/2.5DAnimation/ban-left-icon5.png"
          />
          <img
            className="move-right8"
            src="/images/2.5DAnimation/ban-right-tu8.png"
          />
          <div className="move-right-path">
            <img
              className="move-right-path1"
              src="/images/2.5DAnimation/ban-left-tu3.png"
            />
            <img
              className="move-right-path2"
              src="/images/2.5DAnimation/ban-right-tu09.png"
            />
          </div>
          <img
            className="move-right1"
            src="/images/2.5DAnimation/ban-right-tu1.png"
          />
          <img
            className="ban-right-tu6"
            src="/images/2.5DAnimation/ban-right-tu6.png"
          />
          <img
            className="ban-right-tu7"
            src="/images/2.5DAnimation/ban-right-tu7.png"
          />
          <img
            className="ban-right-tu2"
            src="/images/2.5DAnimation/ban-right-tu2.png"
          />
          <img
            className="ban-right-tu4"
            src="/images/2.5DAnimation/ban-right-tu4.png"
          />
          <img
            className="ban-right-tu3"
            src="/images/2.5DAnimation/ban-right-tu3.png"
          />
          <img
            className="ban-right-tu5"
            src="/images/2.5DAnimation/ban-right-tu5.png"
          />
        </div>
      </div>
    </AnimationWrapper>
  )
}

animationTwoPointFiveD.displayName = 'animationTwoPointFiveD'

export default memo(animationTwoPointFiveD)
