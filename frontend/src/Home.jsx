import Hero from './components/Hero'
import Description from './components/Description'
import CardSection from './components/CardSection'
import Footer from './components/Footer'
import Header from './components/Header'

function Home() {
  return (
    <section className='grid grid-rows-[auto,auto,auto,auto] gap-4'>
      <div className='flex items-center justify-center'>
        <Header />
      </div>
      <div className='flex items-center justify-center'>
        <Hero />
      </div>
      <div className='flex items-center justify-center'>
        <Description />
      </div>
      <div className='flex items-center justify-center'>
        <CardSection />
      </div>
      <div className='flex items-center justify-center'>
        <Footer />
      </div>
    </section>
  )
}

export default Home