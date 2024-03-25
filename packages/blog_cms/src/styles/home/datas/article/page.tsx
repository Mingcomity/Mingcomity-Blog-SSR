import styled from 'styled-components'

export const DatasArticleWrapper = styled.div`
  .filterBox {
    margin-bottom: 2.4rem;
    .ant-select {
      width: 25rem;
      max-width: 30rem;
    }
  }
  .articleListBox {
    .item {
      width: 100%;
      padding: 1.2rem 0;
      &:not(:last-child) {
        border-bottom: 1px solid ${(props) => props.theme.colorBorderSecondary};
      }
      .ant-typography-ellipsis {
        font-weight: 400;
        letter-spacing: 1px;
      }
    }
  }
`
