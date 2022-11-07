import { FaBookmark } from 'react-icons/fa'
import { ImStarFull } from 'react-icons/im'
import { AnimeType } from '../../../library'
import { ActionButtons, Button } from './style'

type ButtonsProps = {
  anime: AnimeType
}
export function MobileButtons({ anime }: ButtonsProps) {
  return (
    <ActionButtons>
      <Button aria-label="Add to favorite">
        <ImStarFull className="star__svg" /> <span>Add to favorite</span>
      </Button>
      <Button aria-label="Add to bookmarks">
        <FaBookmark className="bookmark__svg" /> <span>Add to bookmark</span>
      </Button>
    </ActionButtons>
  )
}
