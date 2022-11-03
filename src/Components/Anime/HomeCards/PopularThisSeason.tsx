import { AnimeType } from '../../../library'

import { BsDot } from 'react-icons/bs'

type PopularThisSeasonProps = {
  anime: AnimeType
}

export function PopularThisSeason({ anime }: PopularThisSeasonProps) {
  const season = anime?.season.charAt(0).toUpperCase() + anime.season.slice(1)

  return (
    <div>
      <div>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </div>

      <div>
        <p>{anime.title}</p>
        <div>
          <span>{anime.type}</span> <BsDot className="dot__svg" />
          <span>
            {season} {anime.year}
          </span>
          <BsDot className="dot__svg" />
          <span>{anime.status}</span>
        </div>
        <div>
          {anime.genres.map((genre) => (
            <span key={genre.mal_id}>
              {genre.name} <BsDot className="dot__svg" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
