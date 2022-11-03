import { useEffect, useState } from 'react'
import {
  PopularThisSeason,
  AllTimePopular,
  FavoriteThisSeason,
  AllTimeFavorite,
} from '.'
import { AnimeType, CURRENT_SEASON_URL, TOP_ANIME_URL } from '../../../library'

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
    <div>
      {isPopularThisSeason.slice(5, 10).map((data) => (
        <PopularThisSeason key={data.mal_id} />
      ))}

      {isAllTimePopular.slice(0, 5).map((data) => (
        <AllTimePopular key={data.mal_id} />
      ))}

      {isFavoriteThisSeason.slice(0, 5).map((data) => (
        <FavoriteThisSeason key={data.mal_id} />
      ))}

      {isAllTimeFavorite.slice(5, 10).map((data) => (
        <AllTimeFavorite key={data.mal_id} />
      ))}
    </div>
  )
}
