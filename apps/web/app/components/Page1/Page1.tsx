'use client'

import { useRef } from 'react'
import { TitleLine } from 'ui'
import useScrollToElement from '../../hooks/useScrollToElement'
import getAnimateClassName from '../getAnimateClassName'
import Features from './Features'

const Page1 = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useScrollToElement(elementRef)

  const animateClassName = getAnimateClassName(isVisible)

  return (
    <div className="max-w-screen-xl w-11/12 lg:w-full mt-12 mx-auto">
      <h2 className="text-center text-[28px] text-[#314659] tracking-[0.6px]">
        What can <span className="font-semibold">Pro</span> do for you{' '}
      </h2>
      <div className="w-[312px] m-auto mt-6 mb-20">
        <TitleLine />
      </div>
      <div ref={elementRef} className={animateClassName}>
        <Features />
      </div>
    </div>
  )
}

export default Page1
