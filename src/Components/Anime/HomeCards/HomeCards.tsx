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
    console.log(res.data)
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
      <div>
        <h2>Popular this season</h2>
        {isPopularThisSeason.slice(0, 5).map((data) => (
          <PopularThisSeason anime={data} key={data.mal_id} />
        ))}
      </div>
      <div>
        <h2>All time popular</h2>
        {isAllTimePopular.slice(0, 5).map((data) => (
          <AllTimePopular anime={data} key={data.mal_id} />
        ))}
      </div>{' '}
      <div>
        <h2>Favorite this season</h2>
        {isFavoriteThisSeason.slice(7, 12).map((data) => (
          <FavoriteThisSeason anime={data} key={data.mal_id} />
        ))}
      </div>
      <div>
        <h2>All time favorite</h2>
        {isAllTimeFavorite.slice(5, 10).map((data) => (
          <AllTimeFavorite anime={data} key={data.mal_id} />
        ))}
      </div>
    </div>
  )
}
