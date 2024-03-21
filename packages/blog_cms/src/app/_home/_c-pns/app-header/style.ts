import styled from 'styled-components'

export const HeaderWarpper = styled.div`
  height: 100%;
  ${(props) => props.theme.mixin.flexCenter}
  .ant-btn {
    height: 100%;
    ${(props) => props.theme.mixin.flexCenter}
    .anticon {
      font-size: 1.8rem;
    }
  }
  .ant-space {
    height: 100%;
  }
  .ant-space-item {
    display: flex;
    align-items: center;
  }
`
