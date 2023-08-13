const getAnimateClassName = (isVisible: boolean | undefined) => {
  if (isVisible === undefined) return 'opacity-0'

  return isVisible
    ? 'animate-[slide-up_0.6s_ease-out]'
    : 'animate-[slide-down_0.6s_ease-out] opacity-0'
}

export default getAnimateClassName
