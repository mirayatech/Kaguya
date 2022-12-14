import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseSpinner, Navbar, LoadingSpinner } from './Components'
import {
  AuthContextProvider,
  BookmarkContextProvider,
  FavoriteContextProvider,
} from './context'
import { Toaster } from 'react-hot-toast'

export function App() {
  const HomeAnime = lazy(() => import('./pages/HomeAnime'))
  const SignIn = lazy(() => import('./pages/SignIn'))
  const SignUp = lazy(() => import('./pages/SignUp'))
  const CreateAccount = lazy(() => import('./pages/CreateAccount'))
  const Favorite = lazy(() => import('./pages/Favorites/'))
  const Bookmark = lazy(() => import('./pages/Bookmarks/'))
  const Anime = lazy(() => import('./pages/Anime/'))

  const Search = lazy(() => import('./pages/Search/'))

  return (
    <AuthContextProvider>
      <BookmarkContextProvider>
        <FavoriteContextProvider>
          <Toaster position="top-center" />
          <Navbar />
          <LoadingSpinner />
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <HomeAnime />
                </Suspense>
              }
            />
            <Route
              path="/signin"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <SignIn />
                </Suspense>
              }
            />

            <Route
              path="/create/account"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <CreateAccount />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <SignUp />
                </Suspense>
              }
            />
            <Route
              path="/favorites"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <Favorite />
                </Suspense>
              }
            />

            <Route
              path="/bookmarks"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <Bookmark />
                </Suspense>
              }
            />

            <Route
              path="/animes/:id"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <Anime />
                </Suspense>
              }
            />

            <Route
              path="/search"
              element={
                <Suspense fallback={<SuspenseSpinner />}>
                  <Search />
                </Suspense>
              }
            />
          </Routes>
        </FavoriteContextProvider>
      </BookmarkContextProvider>
    </AuthContextProvider>
  )
}
