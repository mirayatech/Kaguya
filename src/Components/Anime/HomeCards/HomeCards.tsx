import {
  PopularThisSeason,
  AllTimePopular,
  FavoriteThisSeason,
  AllTimeFavorite,
} from '.'

export function HomeCards() {
  return (
    <div>
      <PopularThisSeason />
      <AllTimeFavorite />
      <FavoriteThisSeason />
      <AllTimeFavorite />
    </div>
  )
}
