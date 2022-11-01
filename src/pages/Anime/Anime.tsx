import { useEffect, useRef, useState } from 'react'
import { DemoBanner, Homebanner, HomeCards, RowSlider } from '../../Components'
import { AnimeType, CURRENT_SEASON_URL } from '../../library'
import { IoChevronBackSharp, IoChevronForwardOutline } from 'react-icons/io5'
import { Slider, Buttons, Row } from './style'

export default function Anime() {
  const [animes, setAnimes] = useState<AnimeType[]>()
  const [animeInfo, setAnimeInfo] = useState<AnimeType | undefined>(undefined)
  const sliderRef = useRef<any>(null)

  const slideLeft = () => {
    let slider = sliderRef.current
    slider.scrollLeft = slider.scrollLeft - 250
  }
  const slideRight = () => {
    let slider = sliderRef.current
    slider.scrollLeft = slider.scrollLeft + 250
  }

  const getCurrentSeasonAnime = async () => {
    const response = await fetch(CURRENT_SEASON_URL)
    const data = await response.json()
    console.log(data.data)
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
          <button
            onClick={slideLeft}
            className="scroll__button netflix scroll__left"
          >
            <IoChevronBackSharp />
          </button>
          <button
            onClick={slideRight}
            className="scroll__button netflix scroll__left"
          >
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
      </Row>

      <HomeCards />
    </>
  )
}
