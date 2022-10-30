import type { User } from 'firebase/auth'

import create from 'zustand'

type StoreType = {
  currentUser: undefined | null | User
  setCurrentUser: (user: User | null) => void
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useUserStore = create<StoreType>((set: any) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
}))

export type Status = 'idle' | 'loading' | 'success' | 'error'

type LoadingState = {
  status: Status
  setStatus: (status: Status) => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  status: 'idle',
  setStatus: (status: Status) =>
    set(() => ({
      status: status,
    })),
}))
