import { Overlay, Video } from './style'

type TrailerProps = {
  trailer: string
}

export function Trailer({ trailer }: TrailerProps) {
  return (
    <Overlay>
      <Video
        src={`https://www.youtube.com/embed/${trailer}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
        title="video"
      />
    </Overlay>
  )
}
