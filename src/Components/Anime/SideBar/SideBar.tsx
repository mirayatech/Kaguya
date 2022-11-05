import { AnimeType } from '../../../library'
import { Sidebar } from './style'

type SidebarProps = { anime: AnimeType }

export function SideBar({ anime }: SidebarProps) {
  const PERCENTAGE = anime?.score
  const SCORE = Math.floor((PERCENTAGE as number) * 10)

  return (
    <Sidebar>
      <div>
        <p>Format</p>
        <p>{anime.type}</p>
      </div>

      <div>
        <p>English</p>
        <p>{anime.title}</p>
      </div>
      <div>
        <p>Native</p>
        <p>{anime.title_japanese}</p>
      </div>

      <div>
        <p>Score</p>
        <p>{SCORE}&#37;</p>
      </div>

      <div>
        <p>Favorite</p>
        <p>{anime.favorites}</p>
      </div>

      <div>
        <p>Studio</p>
        {anime.studios.map((studio) => (
          <p key={studio.mal_id}>{studio.name}</p>
        ))}
      </div>

      <div>
        <p>Season</p>

        <p>
          {anime.season} {anime.year}
        </p>
      </div>
    </Sidebar>
  )
}
