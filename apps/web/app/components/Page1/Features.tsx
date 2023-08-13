import Image from 'next/image'

const FEATURE_LIST = [
  {
    title: '优雅美观',
    content: '基于 Ant Design 体系精心设计',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,0.12)',
  },
  {
    title: '常见设计模式',
    content: '提炼自中后台应用的典型页面和场景',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,0.12)',
  },
  {
    title: '最新技术栈',
    content: '使用 React/dva/antd 等前端前沿技术开发',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,0.12)',
  },
  {
    title: '响应式',
    content: '针对不同屏幕大小设计',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
    color: '#1AC44D',
    shadowColor: 'rgba(26,196,77,0.12)',
  },
  {
    title: '主题',
    content: '可配置的主题满足多样化的品牌诉求',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
    color: '#FAAD14',
    shadowColor: 'rgba(250,173,20,0.12)',
  },
  {
    title: '国际化',
    content: '内建业界通用的国际化方案（敬请期待）',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
    color: '#722ED1',
    shadowColor: 'rgba(114,46,209,0.12)',
  },
  {
    title: '最佳实践',
    content: '良好的工程实践助你持续产出高质量代码',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
    color: '#FA8C16',
    shadowColor: 'rgba(250,140,22,0.12)',
  },
  {
    title: 'Mock 数据',
    content: '实用的本地数据调试方案',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
    color: '#EB2F96',
    shadowColor: 'rgba(235,45,150,0.12)',
  },
  {
    title: 'UI 测试',
    content: '自动化测试保障前端产品质量',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
    color: '#1890FF',
    shadowColor: 'rgba(24,144,255,0.12)',
  },
]

const Features = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 mb-16">
      {FEATURE_LIST.map((feature) => {
        return (
          <li key={feature.title} className="text-center w-[194px] m-auto">
            <div
              style={{
                color: feature.shadowColor,
              }}
              className={`hover:shadow-[0_12px_24px] shadow-[0_6px_12px] w-20 h-20 rounded-full m-auto mt-5 mb-8 flex items-center justify-center hover:-translate-y-[5px] transition-all`}
            >
              <Image
                src={feature.src}
                alt="img"
                width="0"
                height="0"
                sizes="100vw"
                className="h-[26px] w-[26px]"
              />
            </div>
            <h3 className="my-2 text-[#0d1a26] font-medium">{feature.title}</h3>
            <p className="text-sm text-site-text-color-secondary">
              {feature.content}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default Features
