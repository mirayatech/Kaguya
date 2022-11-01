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
} from '../HomeBanner/style'

import { BsDot } from 'react-icons/bs'

import DEMO_BACKGROUND from '../../../assets/banner.jpg'
import '../HomeBanner/style.css'
import { Link } from 'react-router-dom'

export function DemoBanner() {
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
        backgroundImage: `linear-gradient(to top, black, rgba(0, 0, 0, 0.1)), url(${DEMO_BACKGROUND}) `,
      }}
    >
      <TopGardient />

      <Container>
        <Wrapper>
          <MiniWrapper>
            <Title>Demon Slayer: Kimetsu no Yaiba</Title>
            <Info>
              <Rate>
                <FaRegSmile className="smile__svg" /> 98&#37;
              </Rate>
              <Rate>
                <HiHeart className="heart__svg" /> 32416
              </Rate>

              <ul>
                <li>
                  Action <BsDot className="dot" />
                </li>
                <li>
                  Fantasy <BsDot className="dot" />
                </li>

                <li>Shounen</li>
              </ul>
            </Info>
            <Link to={`/animes/${53323}`} aria-label="Go to Anime">
              <Summary>
                {truncateString(
                  `A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.`,
                  250
                )}
              </Summary>
            </Link>
          </MiniWrapper>

          <Link
            to={`/animes/${53323}`}
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
