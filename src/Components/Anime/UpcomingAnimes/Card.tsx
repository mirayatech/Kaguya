import { AnimeType } from '../../../library'

type CardProps = {
  anime: AnimeType
}

export function Card({ anime }: CardProps) {
  return (
    <div>
      <div>
        <div>
          <img src={anime.images.jpg.large_image_url} alt="" />
        </div>
        <div>
          <p>{anime.title}</p>

          <ul>
            {anime.genres.map((genre) => (
              <li key={genre.mal_id}>{genre.name}</li>
            ))}
          </ul>
          <p>{anime.favorites}</p>
        </div>
      </div>

      <p>{anime.title}</p>
    </div>
  )
}
