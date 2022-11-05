import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimeType } from '../../library'
import { Banner, Section } from './style'

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

  const PERCENTAGE = anime?.score
  const SCORE = Math.floor((PERCENTAGE as number) * 10)

  const ANIME_DURATION = anime?.duration
  const DURATION = ANIME_DURATION?.split(' ').slice(0, 1).join(' ')

  // 👇️ First 2 words

  return (
    <>
      {anime ? (
        <div>
          <Banner
            style={{
              backgroundImage: `linear-gradient(to bottom, #000000e0, #00000020), url(${anime?.trailer.images.maximum_image_url}) `,
            }}
          />

          <Section>
            <img src={anime.images.jpg.large_image_url} alt="" />
            <div>
              <button>Watch Trailer</button>
              <h1>{anime.title}</h1>

              <ul>
                {anime.genres.map((genre) => (
                  <li key={genre.mal_id}>{genre.name}</li>
                ))}
              </ul>
              <p>{anime.synopsis}</p>

              <div>
                <div>
                  <p>Score</p>
                  <p>{SCORE}&#37;</p>
                </div>

                <div>
                  <p>Total episodes</p>
                  <p>{anime.episodes}</p>
                </div>
                <div>
                  <p>Duration</p>
                  <p>{DURATION} minutes</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>{anime.status}</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
