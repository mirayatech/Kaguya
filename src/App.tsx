import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseSpinner, Navbar } from './Components'
import { AuthContextProvider } from './context'

export function App() {
  const Anime = lazy(() => import('./pages/Anime'))
  const Login = lazy(() => import('./pages/Login'))
  const Register = lazy(() => import('./pages/Register'))
  const CreateAccount = lazy(() => import('./pages/CreateAccount'))

  return (
    <AuthContextProvider>
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
          path="/login"
          element={
            <Suspense fallback={<SuspenseSpinner />}>
              <Login />
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
          path="/register"
          element={
            <Suspense fallback={<SuspenseSpinner />}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </AuthContextProvider>
  )
}
