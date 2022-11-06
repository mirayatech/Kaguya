import { AnimeType } from '../../../library'

type ButtonsProps = {
  anime: AnimeType
}
export function Buttons({ anime }: ButtonsProps) {
  return (
    <div>
      <button></button>
      <button></button>
    </div>
  )
}
