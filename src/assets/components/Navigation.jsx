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
      <ul>
        {navigation.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </nav>
  )
}