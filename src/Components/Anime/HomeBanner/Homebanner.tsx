import { AnimeType } from '../../../library'
import { FaRegSmile } from 'react-icons/fa'
import { RiPlayFill } from 'react-icons/ri'

import { HiHeart } from 'react-icons/hi'
import {
  Banner,
  TopGardient,
  Container,
  Title,
  Wrapper,
  MiniWrapper,
  Summary,
  Info,
  Rate,
} from './style'

import { BsDot } from 'react-icons/bs'

import './style.css'
import { Link } from 'react-router-dom'

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

      <Container>
        <Wrapper>
          <MiniWrapper>
            <Title>{animeInfo?.title}</Title>
            <Info>
              <Rate>
                <FaRegSmile className="smile__svg" /> {score}&#37;
              </Rate>
              <Rate>
                <HiHeart className="heart__svg" /> {animeInfo?.favorites}
              </Rate>

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
            </Info>
            <Link to={`/animes/${animeInfo?.mal_id}`} aria-label="Go to Anime">
              <Summary>
                {truncateString(animeInfo?.synopsis as string, 250)}
              </Summary>
            </Link>
          </MiniWrapper>

          <Link
            to={`/animes/${animeInfo?.mal_id}`}
            aria-label="Go to Anime"
            className="play__link"
          >
            <span>
              <RiPlayFill className="play__svg" />
            </span>
          </Link>
        </Wrapper>
      </Container>
    </Banner>
  )
}
