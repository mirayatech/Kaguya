export type UserType = {
  avatarUrl: string
  bookmark: []
  email: string
  favorites: []
  name: string
}

export type AnimeType = {
  title: string
  mal_id: string
  favorites: number
  score: number
  synopsis: string
  status: string
  genres: {
    mal_id: number
    name: string
  }

  images: {
    jpg: {
      large_image_url: string
    }
    webp: {
      large_image_url: string
    }
  }
}
