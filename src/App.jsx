import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import OrderOnline from './pages/OrderOnline'
import Login from './pages/Login'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/menu'
          element={<Menu />}
        />
        <Route
          path='/reservations'
          element={<Reservations />}
        />
        <Route
          path='/online-order'
          element={<OrderOnline />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
