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
    .ant-layout {
      .header {
        height: 4.8rem;
        padding: 0;
        background-color: ${(props) => props.theme.bgWhiteColor};
        ${(props) => props.theme.mixin.flexCenterEnd};
      }
      .content {
        flex: 1;
        min-height: 0;
        margin: 0 1.6rem;
        ${(props) => props.theme.mixin.flexStartStartColumn}
        .nav {
          margin: 1.6rem 0;
        }
        .main {
          padding: 2.4rem;
          flex: 1;
          min-height: 0;
          border-radius: ${(props) => props.theme.borderRadiusLG};
          background-color: ${(props) => props.theme.bgWhiteColor};
        }
      }
      .footer {
        text-align: center;
      }
    }
  }
`
