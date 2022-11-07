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
import { BookmarkType, firebaseDb, UserType } from '../../library'
import {
  FavoriteAnimes,
  Animes,
  Poster,
  TitleWrapper,
} from '../Favorites/style'

export function Bookmarks() {
  const [isUser, setIsUser] = useState<UserType | null>(null)
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([])
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

  const bookmarkCollectionRef = collection(
    firebaseDb,
    `users/${user?.uid}/bookmarks`
  ) as CollectionReference<BookmarkType>
  useEffect(() => {
    const getProfile = () => {
      onSnapshot(bookmarkCollectionRef, (snapshot) => {
        setBookmarks(
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
            <h1> {isUser.name}'s saved animes</h1>

            <h2>Total: {bookmarks.length}</h2>
          </TitleWrapper>

          <Animes>
            {bookmarks.map((bookmark) => (
              <div key={bookmark.id}>
                <Poster>
                  <img src={bookmark.poster} alt="" />
                </Poster>

                <Link to={`/animes/${bookmark.id}`}>
                  <h3>{bookmark.title}</h3>
                </Link>
              </div>
            ))}
          </Animes>
        </FavoriteAnimes>
      )}
    </>
  )
}
