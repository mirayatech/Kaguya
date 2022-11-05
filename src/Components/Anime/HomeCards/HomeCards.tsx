import { useEffect, useState } from 'react'
import {
  PopularThisSeason,
  AllTimePopular,
  FavoriteThisSeason,
  AllTimeFavorite,
} from '.'
import { AnimeType, CURRENT_SEASON_URL, TOP_ANIME_URL } from '../../../library'
import { CardContainer, Card, CardTitle } from './style'

export function HomeCards() {
  const [isAllTimePopular, setIsAllTimePopular] = useState<AnimeType[]>([])
  const [isAllTimeFavorite, setIsAllTimeFavorite] = useState<AnimeType[]>([])
  const [isPopularThisSeason, setIsPopularThisSeason] = useState<AnimeType[]>(
    []
  )
  const [isFavoriteThisSeason, setIsFavoriteThisSeason] = useState<AnimeType[]>(
    []
  )

  const getPopularAndFavoriteThisSeason = async () => {
    const response = await fetch(CURRENT_SEASON_URL)
    const res = await response.json()
    setIsPopularThisSeason(res.data)
    setIsFavoriteThisSeason(res.data)
  }

  const getAllTimePopularAndfavorite = async () => {
    const response = await fetch(TOP_ANIME_URL)
    const res = await response.json()
    setIsAllTimePopular(res.data)
    setIsAllTimeFavorite(res.data)
  }

  useEffect(() => {
    getPopularAndFavoriteThisSeason()
    getAllTimePopularAndfavorite()
  }, [])

  return (
    <CardContainer>
      {/* <Card>
        <CardTitle>Popular this season</CardTitle>
        {isPopularThisSeason.slice(0, 5).map((data) => (
          <PopularThisSeason anime={data} key={data.mal_id} />
        ))}
      </Card>
      <Card>
        <CardTitle>All time popular</CardTitle>
        {isAllTimePopular.slice(0, 5).map((data) => (
          <AllTimePopular anime={data} key={data.mal_id} />
        ))}
      </Card>
      <Card>
        <CardTitle>Favorite this season</CardTitle>
        {isFavoriteThisSeason.slice(7, 12).map((data) => (
          <FavoriteThisSeason anime={data} key={data.mal_id} />
        ))}
      </Card>
      <Card>
        <CardTitle>All time favorite</CardTitle>
        {isAllTimeFavorite.slice(5, 10).map((data) => (
          <AllTimeFavorite anime={data} key={data.mal_id} />
        ))}
      </Card> */}
    </CardContainer>
  )
}
