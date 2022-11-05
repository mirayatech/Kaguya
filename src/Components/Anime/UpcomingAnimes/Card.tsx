import { BsDot } from 'react-icons/bs'
import { HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
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
        <Link to={`/animes/${anime.mal_id}`}>
          <Image>
            <Poster src={anime.images.jpg.large_image_url} alt="" />
            <Gardient />
          </Image>
        </Link>
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
