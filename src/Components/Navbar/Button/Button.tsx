import { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import './style.css'

import { motion } from 'framer-motion'
import { HamburgerMenu, Wrapper } from './style'

export function Button() {
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
          <motion.div
            className="menu"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            <Link to="/" onClick={() => setIsOpen(false)}>
              Anime
            </Link>
            <Link to="/mangas" onClick={() => setIsOpen(false)}>
              Manga
            </Link>
            <Link to="/favorites" onClick={() => setIsOpen(false)}>
              Favorite
            </Link>
            <Link to="/bookmarks" onClick={() => setIsOpen(false)}>
              Bookmark
            </Link>
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              Sign in
            </Link>
          </motion.div>
        </ClickAwayListener>
      )}
    </Wrapper>
  )
}
