import styled from 'styled-components'

export const IssueFormWrapper = styled.div`
  width: 40rem;
  .ant-typography {
    font-weight: 400;
    font-size: 1.6rem;
  }
  .ant-divider {
    margin: 0;
    margin-bottom: 1.2rem;
  }
`

export const ArticleIssueWrapper = styled.div`
  height: 100%;
  position: relative;
  ${(props) => props.theme.mixin.flexStartStartColumn}
  .operationBox {
    margin-bottom: 1.2rem;
    .ant-input {
      border: none;
      font-weight: 600;
      font-size: 2.2rem;
      box-shadow: none;
    }
  }
  & > div {
    &:nth-child(2) {
      flex: 1;
      min-height: 0%;
    }
  }
  .mdEditorBox {
    flex: 1;
    min-height: 0%;
  }
  .bytemd {
    height: 100%;
  }
`
