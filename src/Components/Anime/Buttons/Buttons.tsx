import { doc, setDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'
import { FaBookmark } from 'react-icons/fa'
import { v4 } from 'uuid'

import { ImStarFull } from 'react-icons/im'
import {
  useAuthContext,
  useBookmarkContext,
  useFavoriteContext,
} from '../../../context'
import { AnimeType, firebaseDb } from '../../../library'
import { ActionButtons, Button } from './style'

type ButtonsProps = {
  anime: AnimeType
}
export function Buttons({ anime }: ButtonsProps) {
  const { setIsBookmarkOpen } = useBookmarkContext()
  const { setIsFavoriteOpen } = useFavoriteContext()

  const { user } = useAuthContext()

  const uuid = v4()

  const addAnimeToBookmark = async () => {
    if (user?.email) {
      const bookmarksCollectionReference = doc(
        firebaseDb,
        `users/${user?.uid}/bookmarks/${uuid} `
      )

      await setDoc(bookmarksCollectionReference, {
        id: anime.mal_id,
        title: anime.title,
        poster: anime.images.jpg.large_image_url,
      })
      toast('Added to bookmarks.', {
        icon: '👻',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    } else {
      setIsBookmarkOpen(true)
    }
  }

  const addAnimeToFavorite = async () => {
    if (user?.email) {
      const favoritesCollectionReference = doc(
        firebaseDb,
        `users/${user?.uid}/favorites/${uuid} `
      )

      await setDoc(favoritesCollectionReference, {
        id: anime.mal_id,
        title: anime.title,
        poster: anime.images.jpg.large_image_url,
      })
      toast('Added to favorites.', {
        icon: '⭐',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    } else {
      setIsFavoriteOpen(true)
    }
  }

  return (
    <>
      <ActionButtons>
        <Button aria-label="Add to favorite" onClick={addAnimeToFavorite}>
          <ImStarFull className="star__svg" /> <span>Add to favorite</span>
        </Button>
        <Button aria-label="Add to bookmarks" onClick={addAnimeToBookmark}>
          <FaBookmark className="bookmark__svg" /> <span>Add to bookmark</span>
        </Button>
      </ActionButtons>
    </>
  )
}
