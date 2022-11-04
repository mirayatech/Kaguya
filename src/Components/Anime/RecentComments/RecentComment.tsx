import { useEffect, useState } from 'react'
import { RECENT_ANIME_REVIEWS } from '../../../library'

export function RecentComment() {
  const [reviews, setReviews] = useState([])

  const getRecentReviews = async () => {
    const response = await fetch('https://api.jikan.moe/v4/reviews/anime')
    const res = await response.json()
    console.log(res)

    useEffect(() => {
      getRecentReviews()
    }, [])
  }

  return <div>RecentComment</div>
}
