import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import { data } from '../data'
import Testimonials from '../components/Testimonials'
import Layanan from '../components/Layanan'

export default function Home({services}) {
  return (
    <div>
      <Head>
        <title>Ady Dev</title>
        <meta name="description" content="the most handsome men alive" />
        <meta name="google-site-verification" content="iivTrbKnVBEuglc6bJk-dWhRTVUD3eH6LviHrTkOjKs" />
      </Head>
      <Intro />
      <Layanan />
      {/* <Services services={services} /> */}
      <Testimonials />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return{
    props: { services },
  }
}