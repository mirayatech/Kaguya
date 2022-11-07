import { doc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { firebaseDb, UserType } from '../../library'
import {
  FavoriteAnimes,
  Animes,
  Poster,
  TitleWrapper,
} from '../Favorites/style'

export function Bookmarks() {
  const [isUser, setIsUser] = useState<UserType | null>(null)
  const { user } = useAuthContext()

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
      }),

    [user?.uid]
  )

  return (
    <>
      {isUser && (
        <FavoriteAnimes>
          <TitleWrapper>
            <h1> {isUser.name}'s saved animes</h1>

            <h2>Total: {isUser.bookmark.length}</h2>
          </TitleWrapper>

          <Animes>
            {isUser.bookmark.map((bookmark) => (
              <Link to={`/animes/${bookmark.id}`}>
                <div key={bookmark.id}>
                  <Poster>
                    <img src={bookmark.poster} alt="" />
                  </Poster>
                  <h3>{bookmark.title}</h3>
                </div>
              </Link>
            ))}
          </Animes>
        </FavoriteAnimes>
      )}
    </>
  )
}
