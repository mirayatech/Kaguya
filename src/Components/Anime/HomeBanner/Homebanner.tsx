import { AnimeType } from '../../../library'

import { FaRegSmile } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'
import { Banner, TopGardient } from './style'

type HomebannerProps = {
  animeInfo: AnimeType | undefined
}
export function Homebanner({ animeInfo }: HomebannerProps) {
  return (
    <Banner
      style={{
        backgroundImage: `linear-gradient(to top, black, rgba(0, 0, 0, 0.1)), url(${animeInfo?.trailer.images.maximum_image_url}) `,
      }}
    >
      <TopGardient />
      <div>
        {animeInfo?.title}
        <div>
          <p>
            <FaRegSmile /> {animeInfo?.score}{' '}
          </p>
          <p>
            <HiHeart /> {animeInfo?.favorites}
          </p>
          <ul>
            {animeInfo?.genres.map((genre) => (
              <li key={genre.mal_id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Banner>
  )
}
