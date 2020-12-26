import Header from './layout/Header'
import Scores from './components/Scores'
import Slots from './components/Slots'
import Footer from './layout/Footer'
import { useEffect } from 'react'
import PlayButton from './components/PlayButton'

const App = () => {
  useEffect(() => {
    // If the high score and last game score variable in local storage does not exist, create it
    !localStorage.getItem('highScore') && localStorage.setItem('highScore', '0')
    !localStorage.getItem('lastGameScore') && localStorage.setItem('lastGameScore', '0')
  })

  return (
    <div className="App">
      <Header />
      <Scores />
      <Slots />
      <PlayButton />
      <Footer />
    </div>
  )
}

export default App
