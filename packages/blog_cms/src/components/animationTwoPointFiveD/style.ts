'use client'
import styled from 'styled-components'
export const AnimationWrapper = styled.div`
  /* background-image: url(/images/2.5DAnimation/ban-PetaBase-s-Bg.jpeg); */
  background-repeat: no-repeat;
  background-position: center;
  ${(props) => props.theme.mixin.flexCenter}
  .maxCon {
    position: relative;
    margin: 0 auto;
  }

  .pbs-move {
    width: 473px;
    height: 296px;
    position: relative;
  }

  .pbs-move img {
    position: absolute;
    border: 0;
  }

  .ban-polygons1 {
    top: 229px;
    left: 306px;
  }

  .ban-polygons2 {
    top: 37px;
    left: 28px;
  }

  .ban-polygons3 {
    top: -19px;
    left: 360px;
  }

  .pbs-move .move-left1 {
    left: 0;
    top: 154px;
  }

  .pbs-move .ban-line1 {
    left: 33px;
    bottom: 112px;
    animation: fadeup 1s infinite;
  }

  .pbs-move .ban-line2 {
    left: 63px;
    bottom: 175px;
    animation: fadeup 1s 0.8s infinite;
    opacity: 0;
  }

  .pbs-move .ban-line3 {
    left: 73px;
    bottom: 135px;
    animation: fadeup 1s 0.4s infinite;
    opacity: 0;
  }

  .pbs-move .ban-line4 {
    left: 104px;
    bottom: 114px;
    animation: fadeup 1s 0.2s infinite;
    opacity: 0;
  }

  .pbs-move .ban-left-icon1 {
    top: 168px;
    left: 37px;
    animation: left-updown 1.7s infinite ease-in both;
  }

  .pbs-move .ban-left-icon2 {
    top: 153px;
    left: 64px;
    animation: left-updown1 1.3s infinite ease-in both;
  }

  .pbs-move .ban-left-icon3 {
    top: 134px;
    left: 51px;
    animation: left-downup 1.7s infinite ease-in both;
  }

  .pbs-move .ban-left-icon4 {
    top: 142px;
    left: 84px;
    animation: left-downup 1.7s 0.5s infinite ease-in both;
  }

  .pbs-move .ban-left-icon5 {
    top: 181px;
    left: 67px;
    animation: left-updown 1.7s 0.7s infinite ease-in both;
  }

  .pbs-move .move-left2 {
    left: 65px;
    top: 150px;
  }

  .pbs-move .move-center1 {
    left: 87px;
    top: 4px;
  }

  .pbs-move .move-center2 {
    top: 92px;
    left: 153px;
  }

  .move-center-rectangles {
    position: absolute;
    left: 186px;
    top: 84px;
    width: 20px;
    height: 27px;
    overflow: hidden;
    transform: skewY(27deg);
  }

  .move-center-rectangles div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 14px;
    background: #0254bf;
    animation: move-center-rectangles 2.2s linear infinite;
  }

  .move-center-heyslim {
    position: absolute;
    left: 174px;
    top: 71px;
    width: 20px;
    height: 11px;
    overflow: hidden;
    transform: skewY(27deg);
  }

  .move-center-heyslim .line1 {
    width: 20px;
    height: 2px;
    background: #7dbfef;
    position: absolute;
    left: 0;
    top: 0;
    animation: heyslimline1 2s linear infinite forwards;
  }

  .move-center-heyslim .line2 {
    width: 16px;
    height: 2px;
    background: #7dbfef;
    position: absolute;
    left: 0;
    top: 4px;
    animation: heyslimline2 1.6s linear infinite forwards;
  }

  .move-center-heyslim .line3 {
    width: 10px;
    height: 2px;
    background: #7dbfef;
    position: absolute;
    left: 0;
    top: 8px;
    animation: heyslimline3 1.6s linear infinite forwards;
  }

  .ban-center-tu3 {
    left: 116px;
    bottom: 180px;
    animation: ban-center-tu3 1.6s linear infinite forwards;
    opacity: 0;
  }

  .ban-center-tu13 {
    left: 212px;
    bottom: 119px;
    animation: ban-center-tu3 1.6s 0.3s linear infinite forwards;
    opacity: 0;
  }

  .ban-center-tu23 {
    left: 320px;
    bottom: 182px;
    animation: ban-center-tu3 1.6s 0.6s linear infinite forwards;
    opacity: 0;
  }

  .ban-center-tu4 {
    left: 201px;
    top: -10px;
    animation: ban-center-tu4 1.6s linear infinite forwards;
  }

  .pbs-move .small-circle1 {
    width: 7px;
    height: 7px;
    background: #14919f;
    border-radius: 50%;
    position: absolute;
    left: 150px;
    top: 148px;
  }

  .pbs-move .small-circle2 {
    width: 8px;
    height: 8px;
    background: #0e43ce;
    border-radius: 50%;
    position: absolute;
    left: 302px;
    top: 134px;
  }

  .pbs-move .move-right8 {
    top: 135px;
    left: 305px;
  }

  .pbs-move .move-right1 {
    top: 103px;
    left: 292px;
  }

  .move-left-path {
    position: absolute;
    left: 91px;
    bottom: 106px;
    width: 64px;
    height: 40px;
  }

  .ban-left-path1 {
    left: 0;
    top: 0;
    offset-path: path('M0.500,40.500 L64.500,0.500 ');
    animation: ban-left-path1 4s ease-out infinite;
  }

  .ban-left-path2 {
    left: 0;
    top: 0;
    offset-path: path('M0.500,40.500 L64.500,0.500 ');
    animation: ban-left-path2 4s ease-out infinite forwards;
    opacity: 0;
  }

  .move-right-path {
    position: absolute;
    left: 305px;
    top: 135px;
    width: 69px;
    height: 47px;
  }

  .move-right-path1 {
    left: 0;
    top: 0;
    offset-path: path('M1.030,0.500 L69.530,42.000 ');
    animation: move-right-path1 4s ease-out infinite;
    opacity: 0;
  }

  .move-right-path2 {
    left: 0;
    top: 0;
    offset-path: path('M1.030,0.500 L69.530,42.000 ');
    animation: move-right-path2 4s ease-out infinite forwards;
    opacity: 0;
  }

  .ban-right-tu2 {
    left: 355px;
    top: 166px;
    animation: ban-right-tu2 4s ease-out infinite;
    opacity: 0;
  }

  .ban-right-tu4 {
    left: 341px;
    top: 178px;
    animation: ban-right-tu4 4s ease-out infinite;
    opacity: 0;
  }

  .ban-right-tu3 {
    left: 402px;
    top: 166px;
    animation: ban-right-tu3 4s ease-out infinite;
    opacity: 0;
  }

  .ban-right-tu5 {
    left: 416px;
    top: 178px;
    animation: ban-right-tu5 4s ease-out infinite;
    opacity: 0;
  }

  .ban-right-tu6 {
    top: 113px;
    right: 60px;
    animation: ban-right-tu6 4s ease-out infinite forwards;
    opacity: 0;
  }

  .ban-right-tu7 {
    top: 92px;
    right: 55px;
    animation: ban-right-tu7 4s ease-out infinite forwards;
    transform: scale(0);
  }

  /* 左边烟花效果 */
  @keyframes fadeup {
    0% {
      transform: translateY(0);
      opacity: 0;
    }

    40% {
      opacity: 1;
    }

    60% {
      opacity: 1;
    }

    100% {
      transform: translateY(-70px);
      opacity: 0;
    }
  }

  /* 左边图片的动画 */
  @keyframes left-updown {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes left-updown1 {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes left-downup {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(10px);
    }
  }

  /* 中间关闸特效 */
  @keyframes move-center-rectangles {
    from {
      transform: translateY(14px);
    }

    70%,
    to {
      transform: translateY(-10px);
    }
  }

  /* 中间水平进度条 */
  @keyframes heyslimline1 {
    from {
      transform: translateX(-20px);
    }

    80%,
    to {
      transform: translateX(0);
    }
  }

  @keyframes heyslimline2 {
    from {
      transform: translateX(-16px);
    }

    80%,
    to {
      transform: translateX(0);
    }
  }

  @keyframes heyslimline3 {
    from {
      transform: translateX(-10px);
    }

    80%,
    to {
      transform: translateX(0);
    }
  }

  /* 中间光束效果 */
  @keyframes ban-center-tu3 {
    50% {
      opacity: 1;
    }
  }

  /* 中间顶部盒子浮动特效 */
  @keyframes ban-center-tu4 {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-12px);
    }
  }

  /* 左边管管道光束移动 */
  @keyframes ban-left-path1 {
    0% {
      opacity: 0;
      offset-distance: 0;
    }

    2%,
    12.8% {
      opacity: 1;
    }

    14.8%,
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }

  /* 左边管管道面板移动 */
  @keyframes ban-left-path2 {
    14.8% {
      opacity: 0;
      offset-distance: 0;
    }

    16.8%,
    30.7% {
      opacity: 1;
    }

    32.7%,
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }

  /* 右边管管道光束移动 */
  @keyframes move-right-path1 {
    32.7% {
      opacity: 0;
      offset-distance: 0;
    }

    34.7%,
    48.5% {
      opacity: 1;
    }

    50.5%,
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }

  /* 右边管管道面板移动 */
  @keyframes move-right-path2 {
    50.5% {
      offset-distance: 0;
      opacity: 0;
    }

    52.5%,
    66.4% {
      opacity: 1;
    }

    68.4%,
    100% {
      offset-distance: 100%;
      opacity: 0;
    }
  }

  /* 右边向左推出方块1 */
  @keyframes ban-right-tu2 {
    68.4% {
      transform: translate(0, 0);
      opacity: 0;
    }

    70.4%,
    73.7% {
      opacity: 1;
    }

    75.7%,
    100% {
      transform: translate(-18px, 10px);
      opacity: 1;
    }
  }

  /* 右边向左推出方块2 */
  @keyframes ban-right-tu4 {
    75.7% {
      transform: translate(0, 0);
      opacity: 0;
    }

    77.7%,
    80% {
      opacity: 1;
    }

    82%,
    100% {
      transform: translate(-14px, 7px);
      opacity: 1;
    }
  }

  /* 右边向右推出方块1 */
  @keyframes ban-right-tu3 {
    68.4% {
      transform: translate(0, 0);
      opacity: 0;
    }

    70.4%,
    73.7% {
      opacity: 1;
    }

    75.7%,
    100% {
      transform: translate(20px, 10px);
      opacity: 1;
    }
  }

  /* 右边向右推出方块2 */
  @keyframes ban-right-tu5 {
    75.7% {
      transform: translate(0, 0);
      opacity: 0;
    }

    77.7%,
    80% {
      opacity: 1;
    }

    82%,
    100% {
      transform: translate(17px, 4px);
      opacity: 1;
    }
  }

  /* 右边向上推出方块2 */
  @keyframes ban-right-tu6 {
    68.4% {
      opacity: 0;
    }

    69.4%,
    100% {
      opacity: 1;
    }
  }

  /* 右边向上推出方块2 */
  @keyframes ban-right-tu7 {
    68.4% {
      transform: scale(0);
    }

    75.7%,
    100% {
      transform: scale(1);
    }
  }
`
