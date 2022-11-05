import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimeType } from '../../library'
import { RiPlayFill } from 'react-icons/ri'

import {
  Banner,
  Poster,
  Section,
  Button,
  AnimeInfo,
  AnimeShowcase,
  Wide,
  Grid,
} from './style'
import { BsDot } from 'react-icons/bs'
import { SideBar, Trailer } from '../../Components'
import ClickAwayListener from 'react-click-away-listener'

export default function Anime() {
  const [anime, setAnime] = useState<AnimeType | null>(null)
  const [isTrailerOpen, setIsTrailerOpen] = useState(false)

  const { id } = useParams()

  const URL = `https://api.jikan.moe/v4/anime/${id}`

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
        <>
          {isTrailerOpen && (
            <ClickAwayListener onClickAway={() => setIsTrailerOpen(false)}>
              <Trailer trailer={anime.trailer.youtube_id} />
            </ClickAwayListener>
          )}

          <div>
            <Banner
              style={{
                backgroundImage: `linear-gradient(to bottom, #000000e0, #00000020), url(${anime?.trailer.images.maximum_image_url}) `,
              }}
            />

            <Wide>
              <Section>
                <Poster src={anime.images.jpg.large_image_url} alt="" />
                <AnimeInfo>
                  <Button onClick={() => setIsTrailerOpen(true)}>
                    <RiPlayFill className="play__svg" /> Watch Trailer
                  </Button>
                  <h1>{anime.title}</h1>

                  <ul>
                    {anime.genres.map((genre) => (
                      <li key={genre.mal_id}>
                        {genre.name} <BsDot className="dot__svg" />
                      </li>
                    ))}
                    {anime.themes.map((theme) => (
                      <li key={theme.mal_id}>
                        {theme.name}
                        <BsDot className="dot__svg" />
                      </li>
                    ))}
                    {anime.demographics.map((demo) => (
                      <li key={demo.mal_id}>
                        {demo.name}
                        <BsDot className="dot__svg" />
                      </li>
                    ))}
                  </ul>
                  <p>{anime.synopsis}</p>

                  <AnimeShowcase>
                    <div>
                      {anime.score ? (
                        <>
                          <p>Score</p>
                          <p>{SCORE}&#37;</p>
                        </>
                      ) : (
                        <>
                          <p>Score</p>
                          <p>No result yet</p>
                        </>
                      )}
                    </div>

                    <div>
                      {anime.episodes ? (
                        <>
                          <p>Total episodes</p>
                          <p>{anime.episodes} </p>
                        </>
                      ) : (
                        <>
                          <p>Total episodes</p>
                          <p>No result yet</p>
                        </>
                      )}
                    </div>
                    <div>
                      {anime.duration ? (
                        <>
                          <p>Duration</p>
                          <p>{DURATION} minutes</p>
                        </>
                      ) : (
                        <>
                          <p>Duration</p>
                          <p>No result yet</p>
                        </>
                      )}
                    </div>
                    <div>
                      {anime.status ? (
                        <>
                          <p>Status</p>
                          <p>{anime.status}</p>
                        </>
                      ) : (
                        <>
                          <p>Status</p>
                          <p>No result yet</p>
                        </>
                      )}
                    </div>
                  </AnimeShowcase>
                </AnimeInfo>
              </Section>
            </Wide>
            <Grid>
              <SideBar anime={anime} />
            </Grid>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
