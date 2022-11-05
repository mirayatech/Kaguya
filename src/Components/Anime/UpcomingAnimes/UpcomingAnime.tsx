import { useEffect, useRef, useState } from 'react'
import { IoChevronBackSharp, IoChevronForwardOutline } from 'react-icons/io5'
import { AnimeType, UPCOMING_ANIME } from '../../../library'
import { Card } from './Card'
import { Buttons, Row, Slider } from './style'

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
      <Buttons>
        <button onClick={slideLeft}>
          <IoChevronBackSharp />
        </button>
        <button onClick={slideRight}>
          <IoChevronForwardOutline />
        </button>
      </Buttons>
      <Slider ref={sliderRef}>
        {upcomingAnime?.map((anime) => (
          <Card anime={anime} key={anime.mal_id} />
        ))}
      </Slider>
    </Row>
  )
}
