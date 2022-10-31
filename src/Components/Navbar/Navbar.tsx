import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { HiOutlineSearch } from 'react-icons/hi'
import { useState } from 'react'

import './style.css'
import { Nav, NavContainer, Wrapper, Image } from './style'
import { useAuthContext } from '../../context'
import { Button } from './Button/Button'
import { Menu } from './Menu/Menu'

export function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const { user } = useAuthContext()

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <Nav className={navbar ? 'active' : 'not-active'}>
      <NavContainer>
        <Wrapper>
          <Link to="/" aria-label="home">
            <Image src={Logo} alt="" />
          </Link>

          <Link className="link right" to="/">
            Anime
          </Link>
          <Link className="link left" to="/mangas">
            Manga
          </Link>

          <Link className="link right" to="/favorites">
            Favorite
          </Link>
          <Link className="link left" to="/bookmarks">
            Bookmark
          </Link>
        </Wrapper>

        <Wrapper>
          <Link to="/search" className="search__link">
            <HiOutlineSearch className="search__svg" />
          </Link>

          {user ? <Menu /> : <Button />}
        </Wrapper>
      </NavContainer>
    </Nav>
  )
}
