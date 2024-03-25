import styled from 'styled-components'
export const AnimationWrapper = styled.div`
  ${(props) => props.theme.mixin.flexCenterCenter}
  ${(props) => props.theme.mixin.bgImgSelfAdaption}
  height: 100%;
  background-image: url('/images/bg-login.png');
  .loginSvg {
    max-width: 50rem;
  }
`
