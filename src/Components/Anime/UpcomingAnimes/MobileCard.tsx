import { BsDot } from 'react-icons/bs'
import { HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AnimeType } from '../../../library'
import { Flex, InfoWrapper, Wrapper } from '../MobileRowSlider/style'

type MobileCardProps = {
  anime: AnimeType
}

export function MobileCard({ anime }: MobileCardProps) {
  return (
    <Link to={`/animes/${anime.mal_id}`}>
      <Wrapper
        style={{
          backgroundImage: `linear-gradient(to top, #00000080, #00000060), url(${anime?.images.jpg.large_image_url}) `,
        }}
      >
        <InfoWrapper>
          <h1>{anime?.title}</h1>
          <Flex>
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
