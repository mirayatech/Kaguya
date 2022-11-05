import { BsDot } from 'react-icons/bs'
import { HiHeart } from 'react-icons/hi'
import { AnimeType } from '../../../library'
import {
  AnimeInfo,
  Image,
  Poster,
  CardTitle,
  Gardient,
  AnimeCard,
} from './style'

type CardProps = {
  anime: AnimeType
}

export function Card({ anime }: CardProps) {
  return (
    <div>
      <AnimeCard>
        <Image>
          <Poster src={anime.images.jpg.large_image_url} alt="" />
          <Gardient />
        </Image>
        <AnimeInfo className="anime__info">
          <h1>{anime.title}</h1>

          <ul>
            {anime.genres.map((genre) => (
              <li key={genre.mal_id}>
                {genre.name} <BsDot className="dot__svg" />
              </li>
            ))}
          </ul>
          <p>
            <HiHeart className="heart__svg" /> {anime.favorites}
          </p>
        </AnimeInfo>
      </AnimeCard>

      <CardTitle>{anime.title}</CardTitle>
    </div>
  )
}
