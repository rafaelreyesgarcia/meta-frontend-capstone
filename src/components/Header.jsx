import Navigation from "./Navigation"
import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <img src={Logo} alt="" />
      </Link>
      <Navigation />
    </header>
  )
}