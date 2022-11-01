import { useAuthContext } from '../../context'
import { Bookmarks, Info } from '.'

export default function Bookmark() {
  const { user } = useAuthContext()

  return <>{user?.uid ? <Bookmarks /> : <Info />}</>
}
