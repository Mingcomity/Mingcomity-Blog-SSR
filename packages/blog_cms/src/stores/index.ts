import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './feature/theme'
import { createWrapper } from 'next-redux-wrapper'
import {
  TypedUseSelectorHook,
  shallowEqual,
  useDispatch,
  useSelector
} from 'react-redux'

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

const wrapper = createWrapper(() => store)
export default wrapper

// 获取返回值类型
export type IRootStore = ReturnType<typeof store.getState>
type DispatchType = typeof store.dispatch

// 自动类型推导
export const useAppSelector: TypedUseSelectorHook<IRootStore> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual
