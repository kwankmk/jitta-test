import { MutableRefObject, useCallback, useEffect, useState } from 'react'

const useScrollToElement = (
  ref: MutableRefObject<HTMLDivElement>
): { isVisible: undefined | boolean } => {
  const [isVisible, setIsVisible] = useState<undefined | boolean>(undefined)

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight) {
        !isVisible && setIsVisible(true)

        if (isVisible && window.pageYOffset === 0) setIsVisible(false)
      } else {
        isVisible && setIsVisible(false)
      }
    }
  }, [isVisible, ref])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { isVisible }
}

export default useScrollToElement
