import { useEffect, useState } from 'react'
import { AnimeType, RANDOM_ANIME } from '../../../library'
import { FaRegSmile } from 'react-icons/fa'
import { RiPlayFill } from 'react-icons/ri'

import { HiHeart } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { BsDot } from 'react-icons/bs'
import {
  Anime,
  AnimeTitle,
  AnimeWrapper,
  PrimaryWrapper,
  SecondaryWrapper,
  Image,
  AnimeInfo,
  AnimeRate,
  AnimeInfoTitle,
  Summary,
} from './style'

import './style.css'

export function RandomAnimes() {
  const [anime, setAnime] = useState<AnimeType | null>(null)

  const percentage = anime?.score
  const score = Math.floor((percentage as number) * 10)

  const getRecentReviews = async () => {
    const response = await fetch(RANDOM_ANIME)
    const res = await response.json()
    setAnime(res.data)
  }

  useEffect(() => {
    getRecentReviews()
  }, [])

  return (
    <>
      <Anime>
        <AnimeTitle>Should watch on Kaguya</AnimeTitle>

        {anime && (
          <AnimeWrapper>
            {/* Anime background  and play button*/}
            <PrimaryWrapper>
              <Image
                style={{
                  backgroundImage: `linear-gradient(to top, #00000060, #00000060), url(${anime?.images.webp.large_image_url}) `,
                }}
              />
              <Link to={`/animes/${anime.mal_id}`} className="play__button">
                <RiPlayFill />
              </Link>
            </PrimaryWrapper>

            <SecondaryWrapper>
              <AnimeInfo>
                <AnimeInfoTitle>{anime.title}</AnimeInfoTitle>
                <AnimeRate>
                  {anime.score ? (
                    <p>
                      <FaRegSmile className="smile__svg" /> {score}&#37;
                    </p>
                  ) : (
                    ''
                  )}
                  {anime.favorites ? (
                    <p>
                      <HiHeart className="heart__svg" /> {anime.favorites}
                    </p>
                  ) : (
                    ' '
                  )}
                </AnimeRate>
                <ul>
                  {anime.genres.map((genre) => (
                    <li key={genre.mal_id}>
                      {genre.name} <BsDot className="dot__svg" />
                    </li>
                  ))}
                </ul>
              </AnimeInfo>

              <Summary>
                {anime.synopsis && anime.synopsis.substr(0, 300) + '...'}
              </Summary>
            </SecondaryWrapper>
          </AnimeWrapper>
        )}
      </Anime>

      {/* Mobile */}
    </>
  )
}
