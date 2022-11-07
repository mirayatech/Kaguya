import { doc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { firebaseDb, UserType } from '../../library'
import { FavoriteAnimes, Animes, Poster, TitleWrapper } from './style'

export function Favorites() {
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
            <h1> {isUser.name}'s favorite animes</h1>

            <h2>Total: {isUser.favorites.length}</h2>
          </TitleWrapper>

          <Animes>
            {isUser.favorites.map((favorite) => (
              <Link to={`/animes/${favorite.id}`}>
                <div key={favorite.id}>
                  <Poster>
                    <img src={favorite.poster} alt="" />
                  </Poster>
                  <h3>{favorite.title}</h3>
                </div>
              </Link>
            ))}
          </Animes>
        </FavoriteAnimes>
      )}
    </>
  )
}
