import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/portfolioData'
import { ArrowIcon } from './Layout'

function Navbar() {
  return (
    <header className="topbar">
      <Link className="brand" to="/" aria-label="Parth Sukhwal home">
        <span className="brand-mark">PS</span>
        <span className="brand-name">PARTH SUKHWAL</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <a className="topbar-contact" href="mailto:parthsukhwal6@gmail.com">
        Say hello <ArrowIcon />
      </a>
    </header>
  )
}

export default Navbar
