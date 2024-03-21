import { createSlice } from '@reduxjs/toolkit'
import { type ThemeConfig, theme } from 'antd'
import { HYDRATE } from 'next-redux-wrapper'

export enum ModeEnum {
  night,
  daytime
}

export interface IThemeInitalState {
  algorithmType: ModeEnum
  colorPrimary: string
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    algorithmType: ModeEnum.daytime,
    colorPrimary: theme.getDesignToken().colorPrimary
  } as IThemeInitalState,
  reducers: {
    setThemeAlgorithmType(state, { type, payload }) {
      state.algorithmType = payload
    },
    setColorPrimary(state, { type, payload }) {
      state.colorPrimary = payload
    }
  },
  extraReducers: (builder) => {
    // Hydrate的操作，保证服务器端和客户端数据的一致性
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.theme
      }
    })
  }
})

export const { setThemeAlgorithmType, setColorPrimary } = themeSlice.actions

export default themeSlice.reducer
