import Navigation from "./Navigation"
import Logo from '../resources/Logo.svg'

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
      <Navigation />
    </header>
  )
}