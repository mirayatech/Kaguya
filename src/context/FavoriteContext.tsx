import type { Dispatch, SetStateAction } from 'react'

import React from 'react'
import { useContext, createContext, useState } from 'react'

type FavoriteContextType = {
  isFavoriteOpen: boolean
  setIsFavoriteOpen: Dispatch<SetStateAction<boolean>>
}

const FavoriteContext = createContext<FavoriteContextType>({
  isFavoriteOpen: false,
  setIsFavoriteOpen: () => undefined,
})

export const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)

  return (
    <FavoriteContext.Provider value={{ isFavoriteOpen, setIsFavoriteOpen }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavoriteContext = () => {
  return useContext(FavoriteContext)
}
