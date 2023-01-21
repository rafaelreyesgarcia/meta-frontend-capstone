import './App.css'
import Header from './assets/components/Header'
import Navigation from './assets/components/Navigation'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'

function App() {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main></Main>
      <Footer />
    </>
  )
}

export default App
