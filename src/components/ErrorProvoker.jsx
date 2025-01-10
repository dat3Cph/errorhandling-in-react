const ErrorProvoker = ({ setErrorMessage, setShowRenderError, setShowBoundaryError }) => {
  // Handle runtime JS errors in event handlers
  const handleThrowError = () => {
    try {
      throw new Error('An error occurred in the event handler!')
    } catch (error) {
      console.error('Caught in event handler:', error)
      setErrorMessage(error.message) // Update error message
    }
  }

  // Handle async HTTP errors
  const handleAsyncError = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/404')
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`)
      }
      await response.json()
    } catch (error) {
      console.error('Caught async error:', error)
      setErrorMessage(error.message) // Update error message
    }
  }

  const handleRenderError = () => {
    console.error('Triggering React render error...')
    setShowRenderError(true)
  }

  const handleBoundaryError = () => {
    console.error('Triggering Error Boundary error...')
    setShowBoundaryError(true)
  }

  return (
    <>
      <h1>React Error Handling Demo</h1>

      {/* Buttons to trigger different errors */}
      <button onClick={handleThrowError}>Throw JS Error</button>
      <button onClick={handleAsyncError} style={{ marginLeft: '10px' }}>
        {' '}
        Trigger Async HTTP Error{' '}
      </button>
      <button onClick={handleRenderError} style={{ marginLeft: '10px' }}>
        {' '}
        Trigger React Render Error{' '}
      </button>
      <button onClick={handleBoundaryError} style={{ marginLeft: '10px' }}>
        {' '}
        Trigger Error Boundary Error{' '}
      </button>
    </>
  )
}
export default ErrorProvoker
