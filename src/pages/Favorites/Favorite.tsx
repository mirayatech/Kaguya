import { useAuthContext } from '../../context'
import { Favorites, Info } from '.'

export default function Favorite() {
  const { user } = useAuthContext()

  return <>{user?.uid ? <Favorites /> : <Info />}</>
}
