import 'normalize.css'
import './assets/styles/base/_base.scss'
import styles from "./App.module.scss"

import { AppHeader } from './cmps/app-header/AppHeader'
import { AppFooter } from './cmps/app-footer/AppFooter'
import { AppHero } from './cmps/home/app-hero/AppHero'
import { OurAdvantages } from './cmps/home/our-advantages/OurAdvantages'
import { NewReleases } from './cmps/home/new-releases/NewReleases'
import { JoinUs } from './cmps/home/join-us/JoinUs'
import { ContactUs } from './cmps/home/contact-us/ContactUs'
import { ImageSlider } from './cmps/home/image-slider/ImageSlider'


export const App = () => {
  return (
    <>
      <AppHeader />

      <main className={styles.layoutContainer}>
        <AppHero />
        <OurAdvantages />
        <NewReleases />
        <ImageSlider />
        <JoinUs />
        <ContactUs />
      </main>

      <AppFooter />
    </>
  )
}
