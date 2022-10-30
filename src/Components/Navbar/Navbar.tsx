import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { HiOutlineSearch } from 'react-icons/hi'
import { useState } from 'react'

import './style.css'
import { Nav, NavContainer, Wrapper, Image } from './style'

export function Navbar() {
  const [navbar, setNavbar] = useState(false)

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

          <Link className="link right" to="/animes">
            Anime
          </Link>
          <Link className="link left" to="/mangas">
            Manga
          </Link>
        </Wrapper>

        <Wrapper>
          <Link to="/search" className="search__link">
            <HiOutlineSearch className="search__svg" />
          </Link>
          <Link to="/login" className="login__link">
            Login
          </Link>
        </Wrapper>
      </NavContainer>
    </Nav>
  )
}
