import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingSpinner, Navbar } from './Components'
import { AuthContextProvider } from './context'

export function App() {
  const Anime = lazy(() => import('./pages/Anime'))
  const Login = lazy(() => import('./pages/Login'))
  const Register = lazy(() => import('./pages/Register'))

  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Anime />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </AuthContextProvider>
  )
}
