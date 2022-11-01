import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseSpinner, Navbar } from './Components'
import { AuthContextProvider } from './context'
import { Toaster } from 'react-hot-toast'

export function App() {
  const Anime = lazy(() => import('./pages/Anime'))
  const SignIn = lazy(() => import('./pages/SignIn'))
  const SignUp = lazy(() => import('./pages/SignUp'))
  const CreateAccount = lazy(() => import('./pages/CreateAccount'))
  const Favorite = lazy(() => import('./pages/Favorites/'))
  const Bookmark = lazy(() => import('./pages/Bookmarks/'))

  return (
    <AuthContextProvider>
      <Toaster position="top-center" />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<SuspenseSpinner />}>
              <Anime />
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
      </Routes>
    </AuthContextProvider>
  )
}
