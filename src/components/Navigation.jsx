import { Link } from 'react-router-dom'

export default function Navigation() {
  const navigation = [
    'home',
    'about',
    'menu',
    'reservations',
    'order online',
    'login'
  ]
  return (
    <nav>
      <ul className="flex-container">
        {navigation.map((link) => {
          if (link === 'home') {
            return (
              <li
                key={link}
                id={link}
              >
                <Link to='/'>
                  {link}
                </Link>
              </li>
            );
          }
          if (link === 'order online') {
            return (
              <li
                key={link}
                id={'online-order'}
              >
                <Link to='/online-order'>
                  {link}
                </Link>
              </li>
            );
          }
          return (
            <li
              key={link}
              id={link}
            >
              <Link to={`/${link}`}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}