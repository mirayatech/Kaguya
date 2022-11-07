import { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import './style.css'

import { HamburgerMenu, Menu, Wrapper } from './style'

export function Button() {
  const handleClose = () => {
    setIsOpen(false)
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <Link to="/signin" className="signin__link">
        Sign in
      </Link>

      <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </HamburgerMenu>

      {isOpen && (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <Menu>
            <Link onClick={handleClose} to="/">
              Anime
            </Link>
            <Link onClick={handleClose} to="/favorites">
              Favorite
            </Link>
            <Link onClick={handleClose} to="/bookmarks">
              Bookmark
            </Link>
            <Link onClick={handleClose} className="singin__link" to="/signin">
              Sign in
            </Link>
          </Menu>
        </ClickAwayListener>
      )}
    </Wrapper>
  )
}
