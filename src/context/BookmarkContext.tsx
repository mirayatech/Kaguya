import type { Dispatch, SetStateAction } from 'react'

import React from 'react'
import { useContext, createContext, useState } from 'react'

type BookmarkContextType = {
  isBookmarkOpen: boolean
  setIsBookmarkOpen: Dispatch<SetStateAction<boolean>>
}

const BookmarkContext = createContext<BookmarkContextType>({
  isBookmarkOpen: false,
  setIsBookmarkOpen: () => undefined,
})

export const BookmarkContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false)

  return (
    <BookmarkContext.Provider value={{ isBookmarkOpen, setIsBookmarkOpen }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export const useBookmarkContext = () => {
  return useContext(BookmarkContext)
}
