import styled from 'styled-components'

export const DownOptionsWarpper = styled.ul`
  border: 1px solid ${(props) => props.theme.colorBorderSecondary};
  .item {
    width: 100%;
    .ant-btn {
      width: 100%;
    }
  }
`
