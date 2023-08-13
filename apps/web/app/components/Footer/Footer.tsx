import Link from 'next/link'
import FOOTER_LIST from './FooterContent'

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white/70 text-xs">
      <div className="p-10 lg:px-20 lg:py-28 grid lg:grid-cols-4 text-center lg:text-left">
        {FOOTER_LIST.map((footer, index) => {
          return (
            <div key={index}>
              <h2 className="text-sm font-medium mb-6 mt-4 lg:mt-0 text-white">
                {footer.title}
              </h2>
              {footer.lists.map((item) => (
                <div
                  key={item.text}
                  className="flex justify-center lg:justify-start"
                >
                  <Link
                    className="text-white block mb-3"
                    href={item.href}
                    rel={item.rel}
                    target={item.target}
                  >
                    {item.text}
                  </Link>
                  {item.description && (
                    <span> &nbsp; - {item.description}</span>
                  )}
                </div>
              ))}
            </div>
          )
        })}
      </div>
      <div className="border-t border-white/25 px-20 py-5 flex justify-between flex-col lg:flex-row gap-4 items-center">
        <button className="h-[22px] text-white border border-white px-2 rounded font-medium hover:text-primary hover:border-primary transition-all">
          English
        </button>
        <div className="text-center leading-6">
          <span className="pr-4 border-r border-white/50 mr-4">
            <Link
              className="hover:text-white"
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              隐私权政策 ICP
            </Link>
          </span>
          <span className="mr-6">
            <Link
              className="hover:text-white"
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              权益保障承诺书
            </Link>
          </span>
          <span className="mr-3">ICP 证浙 B2-2-100257</span>
          <span className="mr-3">Copyright © 蚂蚁金融服务集团</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
