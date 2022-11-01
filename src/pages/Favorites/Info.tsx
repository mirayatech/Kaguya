import { Link } from 'react-router-dom'

import INFO_IMG from '../../assets/info.png'
import { InfoImage, InfoText, InfoWrapper } from './style'

export function Info() {
  return (
    <InfoWrapper>
      <InfoImage src={INFO_IMG} alt="" />
      <InfoText>
        In order to see your favorites, you need to be authenticated.
        <Link to="/signin"> Sign in</Link> to see your favorite Anime/Mangas.
      </InfoText>
    </InfoWrapper>
  )
}
