import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimeType } from '../../library'
import { Banner } from './style'

export default function Anime() {
  const [anime, setAnime] = useState<AnimeType | null>(null)

  const { id } = useParams()

  const URL = `https://api.jikan.moe/v4/anime/${id}/full`

  const getAnimeInformation = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data.data)
    setAnime(data.data)
  }

  useEffect(() => {
    getAnimeInformation()
  }, [])

  return <></>
}
