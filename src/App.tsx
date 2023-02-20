import 'normalize.css'
import './assets/styles/base/_base.scss'
import styles from "./App.module.scss"

import { AppHeader } from './cmps/app-header/AppHeader'
import { AppHero } from './cmps/home/app-hero/AppHero'
import { OurAdvantages } from './cmps/home/our-advantages/OurAdvantages'
import { NewReleases } from './cmps/home/new-releases/NewReleases'


export const App = () => {
  return (
    <>
      <AppHeader />

      <main className={styles.layoutContainer}>
        <AppHero />
        <OurAdvantages />
        <NewReleases />
      </main>
    </>
  )
}
