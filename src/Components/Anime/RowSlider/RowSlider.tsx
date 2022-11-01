import { AnimeType } from '../../../library'

type RowSliderProps = {
  anime: AnimeType
  setAnimeInfo: React.Dispatch<React.SetStateAction<AnimeType | undefined>>
}

export function RowSlider({ anime, setAnimeInfo }: RowSliderProps) {
  return (
    <div>
      <img
        src={anime.images.jpg.large_image_url}
        alt=""
        onClick={() => setAnimeInfo(anime)}
      />
    </div>
  )
}
