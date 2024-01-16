import Contact from '@/components/Contact'
import Experience from '@/components/Experience/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Portfolio from '@/components/Portfolio/Portfolio'
import Services from '@/components/Services/Services'
import { Schema, lang, langs } from '@/utils/schema'

export default function Home({ params }: { params: { lang: lang } }) {
  const content:Schema = require('@/assets/i18n/'+params.lang+'.json')
  return (
    <>
      <Nav links={content.nav}/>
      <Header {...content.header}/>
      <Services {...content.services}/>
      <Portfolio {...content.portfolio}/>
      <Experience {...content.experience}/>
      <Contact {...content.contact}/>
      <Footer {...content.footer}/>
    </>
  )
}

export async function generateStaticParams() { 
  return langs.map((lang) => ({
    lang: lang,
  }))
}