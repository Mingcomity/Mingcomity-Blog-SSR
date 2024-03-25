import styled from 'styled-components'
export const PageWrapper = styled.div`
  ${(props) => props.theme.mixin.flexCenter}
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .animationBox {
    flex: 1;
    min-width: 0%;
    height: 100%;
  }
  .loginFormBox {
    flex: 1;
    min-width: 0%;
    margin: 2.4rem 0;
    text-align: center;
    .title {
      margin: 3.6rem 0;
    }
    .login-form {
      max-width: 35rem;
      margin: auto;
    }
  }
`
