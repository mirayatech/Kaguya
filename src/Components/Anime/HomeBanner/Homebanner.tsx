import { AnimeType } from '../../../library'

import { FaRegSmile } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'
import {
  Banner,
  TopGardient,
  AnimeInfo,
  Title,
  Wrapper,
  MiniWrapper,
  Summary,
} from './style'

import { BsDot } from 'react-icons/bs'

import './style.css'

type HomebannerProps = {
  animeInfo: AnimeType | undefined
}
export function Homebanner({ animeInfo }: HomebannerProps) {
  const percentage = animeInfo?.score
  const score = Math.floor((percentage as number) * 10)

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (
    <Banner
      style={{
        backgroundImage: `linear-gradient(to top, black, rgba(0, 0, 0, 0.1)), url(${animeInfo?.trailer.images.maximum_image_url}) `,
      }}
    >
      <TopGardient />

      <AnimeInfo>
        <Wrapper>
          <Title>{animeInfo?.title}</Title>

          <MiniWrapper>
            <p>
              <FaRegSmile className="smile__svg" /> {score}&#37;
            </p>
            <p>
              <HiHeart className="heart__svg" /> {animeInfo?.favorites}
            </p>

            <ul>
              {animeInfo?.genres.map((genre) => (
                <li key={genre.mal_id}>
                  {genre.name} <BsDot className="dot" />
                </li>
              ))}

              {animeInfo?.themes.map((theme) => (
                <li key={theme.mal_id}>
                  {theme.name} <BsDot className="dot" />
                </li>
              ))}
            </ul>
          </MiniWrapper>
          <Summary>
            {truncateString(animeInfo?.synopsis as string, 200)}
          </Summary>
        </Wrapper>
      </AnimeInfo>
    </Banner>
  )
}
