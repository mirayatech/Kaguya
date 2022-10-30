import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { HiOutlineSearch } from 'react-icons/hi'

export function Navbar() {
  return (
    <div>
      <div>
        <div>
          <Link to="/" aria-label="home">
            <img src={Logo} alt="" />
          </Link>

          <Link to="/animes">Anime</Link>
          <Link to="/mangas">Manga</Link>
        </div>

        <div>
          <Link to="/search">
            <HiOutlineSearch />
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}
