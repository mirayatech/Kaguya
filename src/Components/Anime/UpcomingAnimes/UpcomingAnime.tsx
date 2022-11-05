import { useEffect, useRef, useState } from 'react'
import { IoChevronBackSharp, IoChevronForwardOutline } from 'react-icons/io5'
import { AnimeType, UPCOMING_ANIME } from '../../../library'
import { Card } from './Card'
import { MobileCard } from './MobileCard'
import { Buttons, Row, Slider, RowWrapper, MobileSlider } from './style'

export function UpcomingAnime() {
  const [upcomingAnime, setUpcomingAnime] = useState<AnimeType[]>([])
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

  const getUpcomingAnime = async () => {
    const response = await fetch(UPCOMING_ANIME)
    const data = await response.json()
    console.log(data.data)
    setUpcomingAnime(data.data)
  }

  useEffect(() => {
    getUpcomingAnime()
  }, [])

  return (
    <Row>
      <RowWrapper>
        <h1>upcoming anime on Kaguya</h1>
        <Buttons>
          <button onClick={slideLeft}>
            <IoChevronBackSharp />
          </button>
          <button onClick={slideRight}>
            <IoChevronForwardOutline />
          </button>
        </Buttons>
      </RowWrapper>
      <Slider ref={sliderRef}>
        {upcomingAnime?.map((anime) => (
          <Card anime={anime} key={anime.mal_id} />
        ))}
      </Slider>

      <MobileSlider>
        {upcomingAnime?.map((anime) => (
          <MobileCard anime={anime} key={anime.mal_id} />
        ))}
      </MobileSlider>
    </Row>
  )
}
