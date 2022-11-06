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
            <Title>
              Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai
            </Title>
            <Info>
              <Rate>
                <FaRegSmile className="smile__svg" /> 82&#37;
              </Rate>
              <Rate>
                <HiHeart className="heart__svg" /> 43275
              </Rate>

              <ul>
                <li>
                  Drama <BsDot className="dot" />
                </li>
                <li>
                  Romance <BsDot className="dot" />
                </li>

                <li>
                  Supernatural <BsDot className="dot" />
                </li>
                <li>School</li>
              </ul>
            </Info>
            <Link to={`/animes/${37450}`} aria-label="Go to Anime">
              <Summary>
                {truncateString(
                  `Six months ago, Sakuta Azusagawa had a chance encounter with a bunny girl in a library. Ever since then, he's been blissfully happy with his girlfriend: Mai Sakurajima, that same bunny girl. However, the reappearance of his mysterious first crush, the now-adult Shouko Makinohara, adds a new complication to his relationship with Mai. To make matters worse, he then encounters a middle school Shouko in the hospital, suffering from a grave illness. Mysteriously, his old scars begin throbbing whenever he's near her. With Shouko's bizarre situation somehow revolving around him, Sakuta will need to come to terms with his own conflicting feelings, for better or worse. With a girl's life in his hands, just what can he do? `,
                  250
                )}
              </Summary>
            </Link>
          </MiniWrapper>

          <Link
            to={`/animes/${37450}`}
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
