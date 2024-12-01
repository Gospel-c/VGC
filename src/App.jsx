import './App.css'
import About from './components/about/about'
import Attendees from './components/attendees/attendees'
import Banner from './components/banner/banner'
import Countdown from './components/countdown/countdown'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import ImageSlider from './components/imgSlider/imgSlider'
import Navbar from './components/navbar/navbar'
import ParentsSeminar from './components/parentsSeminar/parentsSeminar'
import PastEvents from './components/past-Events/pastEvents'
import Speakers from './components/speakers/speakers'
import Sponsors from './components/sponsors/sponsors'
import TechPath from './components/techPath/techPath'
import { useRef } from 'react';



function App() {
  const about = useRef(null)
  const past = useRef(null)
  const speakers = useRef(null)

  const targetDate = '2024-12-29T23:59:59'; // Set your target date here

  return (
  <div>
    <Navbar about={about} past={past} speakers={speakers} />
    <Hero />
    <ImageSlider />
    <Countdown targetDate={targetDate} />
    <Banner />
    <About about={about} />
    <TechPath />
    <Speakers speakers={speakers} />
    <Attendees />
    <PastEvents past={past} />
    <ParentsSeminar />
    <Sponsors />
    <Footer about={about} past={past} speakers={speakers} />
  </div>
  )
}

export default App
