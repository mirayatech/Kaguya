import { Link } from 'react-router-dom'

import INFO_IMG from '../../assets/info.png'
import { InfoImage, InfoText, InfoWrapper } from '../Favorites/style'

export function Info() {
  return (
    <InfoWrapper>
      <InfoImage src={INFO_IMG} alt="" />
      <InfoText>
        In order to see your bookmarks, you need to be authenticated.
        <Link to="/signin"> Sign in</Link> to see your bookmarked Anime/Mangas.
      </InfoText>
    </InfoWrapper>
  )
}
