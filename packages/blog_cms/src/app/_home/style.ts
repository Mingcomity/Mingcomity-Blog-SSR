import styled from 'styled-components'

export const LayoutWarpper = styled.div`
  .ant-layout {
    height: 100vh;
    .sider {
      .logoBox {
        ${(props) => props.theme.mixin.flexCenterCenter}
        padding: 1.2rem 2.4rem;
        gap: 1.2rem;
        .icon {
          font-size: 2rem;
        }
        .title {
          font-size: 1.8rem;
          margin: 0;
          color: ${(props) => props.theme.mixin.fontBlackColor};
          white-space: nowrap;
        }
      }
    }
    .header {
      height: 4.8rem;
      padding: 0;
      background-color: ${(props) => props.theme.bgWhiteColor};
      ${(props) => props.theme.mixin.flexCenterEnd};
    }
  }
`
