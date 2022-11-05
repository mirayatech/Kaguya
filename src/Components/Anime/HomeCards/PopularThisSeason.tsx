import { AnimeType } from '../../../library'

import { BsDot } from 'react-icons/bs'
import { Poster, Row, RowTitle, RowWrapper, RowInfo, RowGenres } from './style'
import { Link } from 'react-router-dom'

type PopularThisSeasonProps = {
  anime: AnimeType
}

export function PopularThisSeason({ anime }: PopularThisSeasonProps) {
  const season = anime?.season.charAt(0).toUpperCase() + anime.season.slice(1)

  return (
    <Row>
      <Poster>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </Poster>

      <RowWrapper>
        <Link to={`/animes/${anime.mal_id}`}>
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
        </Link>
      </RowWrapper>
    </Row>
  )
}
