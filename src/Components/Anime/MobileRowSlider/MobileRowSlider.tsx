import { AnimeType } from '../../../library'

type MobileRowSliderProps = {
  anime: AnimeType
}

export function MobileRowSlider({ anime }: MobileRowSliderProps) {
  return (
    <div>
      <div>
        <img src={anime.images.jpg.large_image_url} alt="" />
      </div>
    </div>
  )
}
