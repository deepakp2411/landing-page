import React from 'react'
import { Achievement, Hero, Navbar, Popular } from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Popular/>
      <Achievement/>
    </div>
  )
}

export default App