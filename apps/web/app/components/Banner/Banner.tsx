'use client'

import Link from 'next/link'
import { Button, TitleLine } from 'ui'
import GitHubButton from 'react-github-button'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="h-[calc(100vh-64px)] lg:h-[526px] flex flex-col lg:grid lg:grid-cols-2 max-w-screen-2xl m-auto w-5/6">
      <div className="flex flex-col order-last self-center w-full 2xl:w-fit lg:order-first 2xl:m-auto text-center lg:text-left">
        <TitleLine />
        <h1
          key="h1"
          className="my-3 text-4xl 2xl:text-6xl leading-[54px] 2xl:leading-[84px] font-semibold animate-[slide-left_0.5s_ease-out]"
        >
          ANT DESIGN PRO
        </h1>
        <p
          key="content"
          className="text-site-text-color-secondary text-xl animate-[slide-left_0.5s_ease-out_0.2s_forwards] opacity-0"
        >
          开箱即用的中台前端/设计解决方案
        </p>
        <div
          key="button"
          className="mt-16 animate-[slide-left_0.5s_ease-out_0.4s_forwards] opacity-0"
        >
          <Link
            href="http://preview.pro.ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>预览</Button>
          </Link>
          <div className="mx-4 inline">
            <Button ghost>开始使用</Button>
          </div>
          <GitHubButton
            className="h-7 font-bold bg-gradient-to-b from-white to-[#F3F3F3] inline-flex px-3 mt-5 sm:mt-0 rounded text-sm gap-2 items-center border border-[#ebedf0] hover:text-primary"
            key="github-button"
            type="stargazers"
            namespace="ant-design"
            repo="ant-design-pro"
          />
        </div>
      </div>

      <div className="self-center mt-20 mb-5 lg:m-0">
        <Image
          alt="banner"
          src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
          width={0}
          height={0}
          className="max-h-[324px] w-full max-w-[598px] m-auto animate-[opacity_1s_ease-out]"
        />
      </div>
    </div>
  )
}

export default Banner
