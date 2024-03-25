export const useSwitchMode = (element: Ref<HTMLElement | undefined>) => {
  const color = useColorMode()
  const themeMode = computed({
    get: () => color.value === 'dark',
    set: () => {
      // @ts-ignore
      if (document.startViewTransition) {
        const el: HTMLElement | null = element.value!.querySelector('.el-switch')
        document.documentElement.style.setProperty(
          '--x',
          el!.offsetLeft + el!.clientWidth / 2 + 'px'
        )
        document.documentElement.style.setProperty('--y', el!.offsetHeight + 'px')
        // @ts-ignore
        document.startViewTransition(() => {
          color.preference = color.value === 'dark' ? 'light' : 'dark'
        })
      } else {
        color.preference = color.value === 'dark' ? 'light' : 'dark'
      }
    }
  })
  return {
    themeMode
  }
}
