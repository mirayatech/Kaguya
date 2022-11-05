import { BsDot } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AnimeType } from '../../../library'
import { Poster, Row, RowGenres, RowInfo, RowTitle, RowWrapper } from './style'

type AllTimeFavoriteProps = {
  anime: AnimeType
}

export function AllTimeFavorite({ anime }: AllTimeFavoriteProps) {
  return (
    <Row>
      <Poster>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </Poster>

      <RowWrapper>
        <Link to={`/animes/${anime.mal_id}`}>
          <RowTitle>{anime.title}</RowTitle>
          <RowInfo>
            <span>{anime.type}</span>
            <BsDot className="dot__svg" />
            <span>{anime.status}</span>
          </RowInfo>
          <RowGenres>
            {anime.genres.map((genre) => (
              <span key={genre.mal_id}>
                {genre.name} <BsDot className="dot__svg" />
              </span>
            ))}
          </RowGenres>
        </Link>
      </RowWrapper>
    </Row>
  )
}
