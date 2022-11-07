import { doc, DocumentReference, onSnapshot } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { firebaseDb, UserType } from '../../library'

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
        <div>
          <h1> {isUser.name}'s favorite animes</h1>

          <div>
            {isUser.favorites.map((favorite) => (
              <Link to={`/animes/${favorite.id}`}>
                <div key={favorite.id}>
                  <img src={favorite.poster} alt="" />
                  <h2>{favorite.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
