import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  onSnapshot,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { FavoriteType, firebaseDb, UserType } from '../../library'
import { FavoriteAnimes, Animes, Poster, TitleWrapper } from './style'

export function Favorites() {
  const [isUser, setIsUser] = useState<UserType | null>(null)
  const [favorites, setFavorites] = useState<FavoriteType[]>([])
  const { user } = useAuthContext()

  const userDocumentRef = doc(
    firebaseDb,
    `users/${user?.uid}`
  ) as DocumentReference<UserType>

  useEffect(
    () =>
      onSnapshot(userDocumentRef, (doc) => {
        const docData = doc.data()
        if (docData) {
          setIsUser(docData)
        }
      }),

    [user?.uid]
  )

  const favoriteCollectionRef = collection(
    firebaseDb,
    `users/${user?.uid}/favorites`
  ) as CollectionReference<FavoriteType>
  useEffect(() => {
    const getProfile = () => {
      onSnapshot(favoriteCollectionRef, (snapshot) => {
        setFavorites(
          snapshot.docs.map((doc) => ({ ...doc.data(), profileId: doc.id }))
        )
      })
    }

    getProfile()
  }, [])

  return (
    <>
      {isUser && (
        <FavoriteAnimes>
          <TitleWrapper>
            <h1> {isUser.name}'s favorite animes</h1>

            <h2>Total: {isUser.favorites.length}</h2>
          </TitleWrapper>

          <Animes>
            {favorites.map((favorite) => (
              <div key={favorite.id}>
                <Poster>
                  <img src={favorite.poster} alt="" />
                </Poster>

                <Link to={`/animes/${favorite.id}`}>
                  <h3>{favorite.title}</h3>{' '}
                </Link>
              </div>
            ))}
          </Animes>
        </FavoriteAnimes>
      )}
    </>
  )
}
