import ClickAwayListener from 'react-click-away-listener'
import { useBookmarkContext } from '../../context'
import { Overlay } from '../Anime/Trailer/style'
import { Modal, Text, Button } from './style'

export function BookmarkModal() {
  const { setIsBookmarkOpen } = useBookmarkContext()

  return (
    <Overlay>
      <ClickAwayListener onClickAway={() => setIsBookmarkOpen(false)}>
        <Modal>
          <Text>Please sign in to save an anime.</Text>

          <Button onClick={() => setIsBookmarkOpen(false)}>Ok</Button>
        </Modal>
      </ClickAwayListener>
    </Overlay>
  )
}
