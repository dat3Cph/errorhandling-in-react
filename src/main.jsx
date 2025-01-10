import './styles/index.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { useRouteError } from 'react-router-dom'
import Content from './pages/Content'
import PageNotFound from './pages/PageNotFound'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Content />} errorElement={<ErrorPage />} />
      <Route path='*' element={<PageNotFound errorMessage='Page Not Found 404' />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
