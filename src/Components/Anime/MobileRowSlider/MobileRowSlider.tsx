import { BsDot } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import { HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AnimeType } from '../../../library'
import { Wrapper, InfoWrapper, Flex } from './style'

type MobileRowSliderProps = {
  anime: AnimeType
}

export function MobileRowSlider({ anime }: MobileRowSliderProps) {
  const percentage = anime?.score
  const score = Math.floor((percentage as number) * 10)
  return (
    <Link to={`/animes/${anime.mal_id}`}>
      <Wrapper
        style={{
          backgroundImage: `linear-gradient(to top, #00000090, #00000070), url(${anime?.images.jpg.large_image_url}) `,
        }}
      >
        <InfoWrapper>
          <h1>{anime?.title}</h1>
          <Flex>
            <p>
              <FaRegSmile className="smile__svg" /> {score}&#37;
            </p>
            <p className="last">
              <HiHeart className="heart__svg" /> {anime?.favorites}
            </p>

            <ul>
              {anime?.genres.map((genre) => (
                <li key={genre.mal_id}>
                  {genre.name} <BsDot className="dot" />
                </li>
              ))}

              {anime?.themes.map((theme) => (
                <li key={theme.mal_id}>
                  {theme.name} <BsDot className="dot" />
                </li>
              ))}
            </ul>
          </Flex>
        </InfoWrapper>
      </Wrapper>
    </Link>
  )
}
