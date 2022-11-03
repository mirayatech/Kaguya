import { BsDot } from 'react-icons/bs'
import { AnimeType } from '../../../library'

type AllTimeFavoriteProps = {
  anime: AnimeType
}

export function AllTimeFavorite({ anime }: AllTimeFavoriteProps) {
  return (
    <div>
      <div>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </div>

      <div>
        <p>{anime.title}</p>
        <div>
          <span>{anime.type}</span> <BsDot className="dot__svg" />
          <span>{anime.year}</span>
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
