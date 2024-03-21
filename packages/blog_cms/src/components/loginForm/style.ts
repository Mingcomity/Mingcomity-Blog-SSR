'use client'
import styled from 'styled-components'
export const FromWrapper = styled.div`
  .login-form {
    .options {
      .ant-form-item-control-input-content {
        ${(props) => props.theme.mixin.flexCenterBetween}
      }
    }
    .login-form-button {
      width: 100%;
    }
  }
`
