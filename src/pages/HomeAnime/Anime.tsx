import { useEffect, useRef, useState } from 'react'
import {
  DemoBanner,
  Footer,
  Homebanner,
  HomeCards,
  MobileRowSlider,
  RandomAnimes,
  RowSlider,
  UpcomingAnime,
} from '../../Components'
import { AnimeType, CURRENT_SEASON_URL } from '../../library'
import { IoChevronBackSharp, IoChevronForwardOutline } from 'react-icons/io5'
import { Slider, Buttons, Row, MobileSlider } from './style'

export default function Anime() {
  const [animes, setAnimes] = useState<AnimeType[]>()
  const [animeInfo, setAnimeInfo] = useState<AnimeType | undefined>(undefined)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slideLeft = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      slider.scrollLeft = slider.scrollLeft - 250
    }
  }
  const slideRight = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      slider.scrollLeft = slider.scrollLeft + 250
    }
  }

  const getCurrentSeasonAnime = async () => {
    const response = await fetch(CURRENT_SEASON_URL)
    const data = await response.json()
    setAnimes(data.data)
  }

  useEffect(() => {
    getCurrentSeasonAnime()
  }, [])

  return (
    <>
      {animeInfo ? <Homebanner animeInfo={animeInfo} /> : <DemoBanner />}

      <Row>
        <Buttons>
          <button onClick={slideLeft}>
            <IoChevronBackSharp />
          </button>
          <button onClick={slideRight}>
            <IoChevronForwardOutline />
          </button>
        </Buttons>
        <Slider ref={sliderRef}>
          {animes?.map((anime) => (
            <RowSlider
              anime={anime}
              key={anime.mal_id}
              setAnimeInfo={setAnimeInfo}
            />
          ))}
        </Slider>
        <MobileSlider>
          {animes?.map((anime) => (
            <MobileRowSlider anime={anime} key={anime.mal_id} />
          ))}
        </MobileSlider>{' '}
      </Row>

      <HomeCards />

      <RandomAnimes />

      <UpcomingAnime />

      <Footer />
    </>
  )
}
