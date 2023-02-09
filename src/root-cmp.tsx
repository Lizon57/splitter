import 'normalize.css'
import './assets/styles/base/_base.scss'

import { AppHeader } from './cmps/app-header/AppHeader'
import { AppHero } from './cmps/home/app-hero/AppHero'


export const App = () => {
  return (
    <>
      <AppHeader />

      <main>
        <AppHero />

      </main>
    </>
  )
}
