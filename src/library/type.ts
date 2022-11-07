export type AnimeType = {
  duration: string
  episodes: number
  season: string
  type: string
  year: number
  title: string
  mal_id: string
  title_japanese: string
  favorites: number
  score: number
  synopsis: string
  status: string

  studios: [{ name: string; mal_id: number }]
  genres: [
    {
      mal_id: number
      name: string
    }
  ]

  demographics: [{ mal_id: number; name: string }]

  themes: [
    {
      mal_id: number
      name: string
    }
  ]

  images: {
    jpg: {
      large_image_url: string
    }
    webp: {
      large_image_url: string
    }
  }

  trailer: {
    embed_url: string
    images: {
      maximum_image_url: string
    }
    youtube_id: string
  }
}

export type CharacterType = {
  character: {
    images: {
      jpg: {
        image_url: string
      }
    }

    name: string
    mal_id: number
  }

  role: string
}

export type UserType = {
  id: string
  name: string
  email: string
  avatarUrl: string

  bookmark: [
    {
      id: number
      poster: string
      title: string
    }
  ]
  favorites: [
    {
      id: number
      poster: string
      title: string
    }
  ]
}

export type FavoriteType = {
  id: number
  poster: string
  title: string
  favoriteId: string
}

export type BookmarkType = {
  id: number
  poster: string
  title: string
  bookmarkId: string
}
