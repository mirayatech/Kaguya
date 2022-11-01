import { useEffect, useState } from 'react'
import { Homebanner, RowSlider } from '../../Components'
import { AnimeType, CURRENT_SEASON_URL } from '../../library'

export default function Anime() {
  const [animes, setAnimes] = useState<AnimeType[]>()
  const [animeInfo, setAnimeInfo] = useState<AnimeType | undefined>(undefined)

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
    <div>
      {animeInfo ? <Homebanner animeInfo={animeInfo} /> : ''}

      {animes?.map((anime) => (
        <RowSlider
          anime={anime}
          key={anime.mal_id}
          setAnimeInfo={setAnimeInfo}
        />
      ))}
    </div>
  )
}
