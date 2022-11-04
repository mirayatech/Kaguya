import { BsDot } from 'react-icons/bs'
import { AnimeType } from '../../../library'
import { Poster, Row, RowGenres, RowInfo, RowTitle, RowWrapper } from './style'

type AllTimePopularProps = {
  anime: AnimeType
}

export function AllTimePopular({ anime }: AllTimePopularProps) {
  const season = anime.season.charAt(0).toUpperCase() + anime.season.slice(1)

  return (
    <Row>
      <Poster>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </Poster>

      <RowWrapper>
        <RowTitle>{anime.title}</RowTitle>
        <RowInfo>
          <span>{anime.type}</span> <BsDot className="dot__svg" />
          <span>
            {season} {anime.year}
          </span>
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
      </RowWrapper>
    </Row>
  )
}
