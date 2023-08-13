'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { Button, TitleLine } from 'ui'
import useScrollToElement from '../hooks/useScrollToElement'
import getAnimateClassName from './getAnimateClassName'

const Page2 = () => {
  const elementRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useScrollToElement(elementRef)

  const animateClassName = getAnimateClassName(isVisible)

  return (
    <div className="max-w-screen-xl w-11/12 lg:w-full my-12 mx-auto text-center">
      <div className="w-[114px] mb-6 mx-auto mt-36">
        <TitleLine />
      </div>
      <h2 className="text-center text-[28px] text-[#314659] tracking-[0.6px]">
        Let’s <span className="font-semibold">Pro</span>
      </h2>

      <div ref={elementRef} className={animateClassName}>
        <p key="p" className="mt-6 mb-8 text-site-text-color-secondary text-sm">
          命令行运行下列命令，快速启动开发服务：
        </p>
        <div
          key="code1"
          className="px-12 py-5 text-left max-w-3xl m-auto rounded bg-[#f2f4f5] text-[#151e26] leading-7"
        >
          <div>
            $ <span className="text-[#f5222d]">git clone</span>{' '}
            git@github.com:ant-design/ant-design-pro.git --depth=1
          </div>
          <div>$ cd ant-design-pro</div>
          <div>$ npm install</div>
          <div>
            $ npm start
            <span className="text-site-text-color-secondary">
              {`// 打开浏览器访问 http://localhost:8000`}
            </span>
          </div>
        </div>
        <p
          key="p2"
          className="mt-6 mb-8 text-site-text-color-secondary text-sm leading-7"
        >
          需要帮助？请先阅读
          <a className="text-primary cursor-pointer"> 开发文档 </a>和
          <a className="text-primary cursor-pointer"> 常见问题 </a>，
          如果未能解决，可以到 GitHub 上
          <a
            className="text-primary cursor-pointer"
            href="https://github.com/ant-design/ant-design-pro/issues"
          >
            {' '}
            进行提问{' '}
          </a>
          。
        </p>
        <Link
          href="http://github.com/ant-design/ant-design-pro"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-20 block"
        >
          <Button>下载 Pro</Button>
        </Link>
      </div>
    </div>
  )
}

export default Page2
