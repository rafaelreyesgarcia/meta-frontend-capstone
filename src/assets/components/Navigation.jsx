export default function Navigation() {
  const navigation = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login'
  ]
  return (
    <nav>
      <ul className="flex-container">
        {navigation.map((link) => (
          <li
            key={link}
            id={link}
          >
            <a href='/'>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}