import { doc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../context'
import { firebaseAuth, firebaseDb, UserType } from '../../../library'
import { Avatar, Button, Wrapper, LogOut, Skeleton } from './style'
import { Menu as HamburgerMenu } from '@mui/material'

import './style.css'
import { signOut } from 'firebase/auth'

export function Menu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isUser, setIsUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuthContext()

  const isOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const avatarDocumentRef = doc(
    firebaseDb,
    `users/${user?.uid}`
  ) as DocumentReference<UserType>

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
              <Button
                id="basic-button"
                aria-controls={isOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar src={isUser.avatarUrl} alt="" />
              </Button>

              <HamburgerMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Link className="auth-link top" to="/animes">
                  Anime
                </Link>
                <Link className="auth-link" to="/mangas">
                  Manga
                </Link>{' '}
                <Link className="auth-link" to="/favorites">
                  Favorite
                </Link>{' '}
                <Link className="auth-link" to="/bookmarks">
                  Bookmark
                </Link>{' '}
                <LogOut onClick={() => signOut(firebaseAuth)}>Log out</LogOut>
              </HamburgerMenu>
            </Wrapper>
          )}
        </>
      )}
    </>
  )
}