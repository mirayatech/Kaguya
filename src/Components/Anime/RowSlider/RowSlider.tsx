import { useState } from 'react'
import { AnimeType } from '../../../library'

import { Image, Poster } from './style'

type RowSliderProps = {
  anime: AnimeType
  setAnimeInfo: React.Dispatch<React.SetStateAction<AnimeType | undefined>>
}

export function RowSlider({ anime, setAnimeInfo }: RowSliderProps) {
  return (
    <Image>
      <Poster
        src={anime.images.jpg.large_image_url}
        alt=""
        onClick={() => setAnimeInfo(anime)}
      />
    </Image>
  )
}
