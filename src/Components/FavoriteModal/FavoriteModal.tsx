import ClickAwayListener from 'react-click-away-listener'
import { useFavoriteContext } from '../../context'
import { Overlay } from '../Anime/Trailer/style'
import { Modal, Text, Button } from './style'

export function FavoriteModal() {
  const { setIsFavoriteOpen } = useFavoriteContext()

  return (
    <Overlay>
      <ClickAwayListener onClickAway={() => setIsFavoriteOpen(false)}>
        <Modal>
          <Text>Please sign in to add an anime to favorite.</Text>

          <Button onClick={() => setIsFavoriteOpen(false)}>Ok</Button>
        </Modal>
      </ClickAwayListener>
    </Overlay>
  )
}
