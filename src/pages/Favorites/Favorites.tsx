import {
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentReference,
  onSnapshot,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context'
import { FavoriteType, firebaseDb, UserType } from '../../library'
import { FavoriteAnimes, Animes, Poster, TitleWrapper } from './style'
import { FiTrash2 } from 'react-icons/fi'
import toast from 'react-hot-toast'

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
          snapshot.docs.map((doc) => ({ ...doc.data(), favoriteId: doc.id }))
        )
      })
    }

    getProfile()
  }, [])

  const removeFromFavorite = (id: string) => {
    const favoriteAnimeDoc = doc(
      firebaseDb,
      `users/${user?.uid}/favorites/${id}`
    )
    deleteDoc(favoriteAnimeDoc)

    toast('Removed from favorites.', {
      icon: '✅',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
  }

  return (
    <>
      {isUser && (
        <FavoriteAnimes>
          <TitleWrapper>
            <h1> {isUser.name}'s favorite animes</h1>

            <h2>Total: {favorites.length}</h2>
          </TitleWrapper>

          <Animes>
            {favorites.map((favorite) => (
              <div key={favorite.id}>
                <Poster>
                  <img src={favorite.poster} alt="" />
                  <button
                    onClick={() => removeFromFavorite(favorite.favoriteId)}
                  >
                    <FiTrash2 />
                  </button>
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
