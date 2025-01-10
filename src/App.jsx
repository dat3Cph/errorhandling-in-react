import { useState } from 'react'
import './styles/App.css'
import { Outlet } from 'react-router-dom'

import ErrorBanner from './components/ErrorBanner'
import ErrorProvoker from './components/ErrorProvoker'
import setupGlobalErrorHandlers from './util/globalErrorHandling'

setupGlobalErrorHandlers()

function App() {
  const [errorMessage, setErrorMessage] = useState(null) // Track error messages
  const [showRenderError, setShowRenderError] = useState(false) // Trigger render error
  const [showBoundaryError, setShowBoundaryError] = useState(false) // Trigger error boundary error

  return (
    <div>
      <ErrorBanner errorMessage={errorMessage} />
      <ErrorProvoker
        setErrorMessage={setErrorMessage}
        setShowRenderError={setShowRenderError}
        setShowBoundaryError={setShowBoundaryError}
      />

      <Outlet context={{ showRenderError, showBoundaryError }} />
    </div>
  )
}

export default App
