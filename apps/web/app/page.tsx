import type { Metadata } from 'next'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2'

export const metadata: Metadata = {
  title: 'Ant Design - pro',
}

export default function Page() {
  return (
    <div>
      <Header />
      <div>
        <Banner />
        <Page1 />
        <Page2 />
      </div>
      <Footer />
    </div>
  )
}
