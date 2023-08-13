import { Menu } from 'ui'
import Image from 'next/image'

const LOGO_URL =
  'https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg'

const MENUS = [
  {
    key: 'home',
    title: '首页',
  },
  {
    key: 'docs',
    title: '文档',
  },
  {
    key: 'components',
    title: '组件',
  },
]

const Header = () => {
  return (
    <div className="grid grid-flow-col h-16 px-10">
      <div id="logo" className="flex items-center">
        <Image
          src={LOGO_URL}
          alt="logo"
          width={32}
          height={32}
          className="mr-4"
        />
        <span className="text-primary text-sm">ANT DESIGN PRO</span>
      </div>
      <div className="opacity-0 sm:opacity-100">
        <Menu menus={MENUS} />
      </div>
    </div>
  )
}

export default Header
