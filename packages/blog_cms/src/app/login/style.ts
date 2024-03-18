'use client'
import styled from 'styled-components'
export const PageWrapper = styled.div`
  ${(props) => props.theme.mixin.flexCenter}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .animationBox {
    flex: 1;
    min-width: 0%;
  }
  .loginFormBox {
    flex: 1;
    min-width: 0%;
  }
`
