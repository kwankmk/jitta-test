interface FooterItem {
  href: string
  text: string
  description?: string
  target?: string
  rel?: string
}

interface Footer {
  title: string
  lists: FooterItem[]
}

const FOOTER_LIST: Footer[] = [
  {
    title: 'Ant Design',
    lists: [
      {
        href: 'https://github.com/ant-design/ant-design-pro',
        target: '_blank',
        text: 'Ant Design Pro GitHub',
      },
      {
        href: 'http://ant.design',
        target: '_blank',
        text: 'Ant Design',
      },
      {
        href: 'http://mobile.ant.design',
        text: 'Ant Design Mobile',
      },
      {
        href: 'http://ng.ant.design',
        text: 'NG-ZORRO',
        description: 'Ant Design of Angular',
      },
      {
        href: 'https://github.com/websemantics/awesome-ant-design',
        target: '_blank',
        text: 'Awesome Ant Design',
      },
    ],
  },
  {
    title: 'Ant Design',
    lists: [
      {
        href: 'http://scaffold.ant.design',
        text: 'Scaffolds',
        description: '脚手架市场',
      },
      {
        href: 'http://motion.ant.design',
        text: 'Ant Motion',
        target: '_blank',
        description: '设计动效',
        rel: 'noopener',
      },
      {
        href: 'http://library.ant.design/',
        text: 'Axure Library',
        target: '_blank',
        description: 'Axure 部件库',
        rel: 'noopener',
      },
      {
        href: 'http://ux.ant.design',
        text: 'Ant UX',
        target: '_blank',
        description: '页面逻辑素材',
        rel: 'noopener',
      },
      {
        href: 'https://github.com/dvajs/dva',
        text: 'dva',
        target: '_blank',
        description: '应用框架',
        rel: 'noopener',
      },
      {
        href: 'https://github.com/dvajs/dva-cli',
        text: 'dva-cli',
        target: '_blank',
        description: '开发工具',
        rel: 'noopener',
      },
    ],
  },
  {
    title: '社区',
    lists: [
      {
        href: '#',
        text: '更新记录',
      },
      {
        href: '#',
        text: '常见问题',
      },
      {
        href: 'https://gitter.im/ant-design/ant-design-pro',
        target: '_blank',
        text: '在线讨论',
        rel: 'noopener',
      },
      {
        href: 'https://github.com/ant-design/ant-design-pro/issues',
        target: '_blank',
        text: '讨论列表',
        rel: 'noopener',
      },
      {
        href: 'http://ant.design/docs/resource/work-with-us',
        target: '_blank',
        text: '加入我们',
        rel: 'noopener',
      },
    ],
  },
  {
    title: '更多产品',
    lists: [
      {
        href: 'http://ant.design/',
        text: 'Ant Design',
        target: '_blank',
        description: '蚂蚁 UI 设计体系',
        rel: 'noopener',
      },
      {
        href: 'https://antv.alipay.com/',
        text: 'AntV',
        target: '_blank',
        description: '蚂蚁数据可视化方案',
        rel: 'noopener',
      },
      {
        href: 'https://eggjs.org/',
        text: 'Egg',
        target: '_blank',
        description: '企业级 Node Web 开发框架',
        rel: 'noopener',
      },
    ],
  },
]

export default FOOTER_LIST
