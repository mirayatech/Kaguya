import { onAuthStateChanged } from 'firebase/auth'
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoadingSpinner, Navbar } from './Components'
import { firebaseAuth, useUserStore } from './library'

export function App() {
  const Anime = lazy(() => import('./pages/Anime'))
  const Login = lazy(() => import('./pages/Login'))
  const Register = lazy(() => import('./pages/Register'))

  // const currentUser = useUserStore((state) => state.currentUser)
  const setCurrentUser = useUserStore((state) => state.setCurrentUser)

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setCurrentUser(user)
        console.log('User:', user)
      }
    })
  }, [])

  // if (typeof currentUser === 'undefined') return <LoadingSpinner />
  return (
    <div>
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
    </div>
  )
}
