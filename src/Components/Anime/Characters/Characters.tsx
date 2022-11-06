import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CharacterType } from '../../../library'

export function Characters() {
  const [characters, setCharacters] = useState<CharacterType[]>([])

  const { id } = useParams()

  const getCharacters = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${id}/characters`
    )
    const data = await response.json()

    console.log(data.data)
    setCharacters(data.data)
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <>
      {characters.map((character, index) => (
        <div key={index}>
          <img src={character.character.images.jpg.image_url} alt="" />

          <div>
            <p>{character.character.name}</p>
            <p>{character.role}</p>
          </div>
        </div>
      ))}
    </>
  )
}
