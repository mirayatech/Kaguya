import { doc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../context'
import { firebaseAuth, firebaseDb, UserType, useStore } from '../../../library'
import {
  Avatar,
  Button,
  Wrapper,
  LogOut,
  Skeleton,
  HamburgerMenu,
} from './style'

import './style.css'
import toast from 'react-hot-toast'
import { signOut } from 'firebase/auth'
import ClickAwayListener from 'react-click-away-listener'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUser, setIsUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuthContext()

  const { setStatus } = useStore()

  const navigate = useNavigate()

  const avatarDocumentRef = doc(
    firebaseDb,
    `users/${user?.uid}`
  ) as DocumentReference<UserType>

  const handleLogOut = () => {
    setStatus('loading')
    signOut(firebaseAuth)
    setIsOpen(false)
    navigate('/')
    toast('You have successfully signed out.', {
      icon: '🤟',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    setStatus('success')
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(
    () =>
      onSnapshot(avatarDocumentRef, (doc) => {
        const docData = doc.data()
        if (docData) {
          setIsUser(docData)
        }
        setIsLoading(false)
      }),

    [user?.uid]
  )

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {isUser && (
            <Wrapper>
              <Button onClick={() => setIsOpen(!isOpen)}>
                <Avatar src={isUser.avatarUrl} alt="" />
              </Button>

              {isOpen && (
                <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                  <HamburgerMenu>
                    <Link
                      onClick={handleClose}
                      className="auth-link top"
                      to="/"
                    >
                      Anime
                    </Link>
                    <Link
                      onClick={handleClose}
                      className="auth-link"
                      to="/favorites"
                    >
                      Favorite
                    </Link>
                    <Link
                      onClick={handleClose}
                      className="auth-link"
                      to="/bookmarks"
                    >
                      Bookmark
                    </Link>
                    <LogOut onClick={handleLogOut}>Sign out</LogOut>
                  </HamburgerMenu>
                </ClickAwayListener>
              )}
            </Wrapper>
          )}
        </>
      )}
    </>
  )
}
