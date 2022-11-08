import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimeType, useStore } from '../../library'
import { Animes, FavoriteAnimes, InputWrapper, NotFound, Poster } from './style'
import ERROR from '../../assets/question.png'

import { DebounceInput } from 'react-debounce-input'

export default function Search() {
  const [searchInputField, setSearchInputField] = useState('Naruto')
  const [animeData, setAnimeData] = useState<AnimeType[]>([])
  const { setStatus } = useStore()

  const getData = async () => {
    setStatus('loading')
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${searchInputField}&limit=20`
    )
    const data = await response.json()
    setAnimeData(data.data)
    setStatus('success')
  }
  useEffect(() => {
    getData()
  }, [searchInputField])

  return (
    <FavoriteAnimes>
      <InputWrapper>
        <DebounceInput
          type="searchInputField"
          minLength={2}
          debounceTimeout={300}
          placeholder="Search your anime"
          onChange={(event) => setSearchInputField(event.target.value)}
        />
      </InputWrapper>

      <Animes>
        {animeData ? (
          animeData.map((anime) => {
            return (
              <div key={anime.mal_id}>
                <Link to={`/animes/${anime.mal_id}`}>
                  <Poster>
                    <img src={anime.images.jpg.large_image_url} alt="" />
                  </Poster>

                  <h3>{anime.title}</h3>
                </Link>
              </div>
            )
          })
        ) : (
          <NotFound>
            <div>
              <img src={ERROR} alt="" />
              <h1>Not Found</h1>
            </div>
          </NotFound>
        )}
      </Animes>
    </FavoriteAnimes>
  )
}
