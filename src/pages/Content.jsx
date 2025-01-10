import { useOutletContext } from 'react-router-dom'
import BuggyComponent from '../components/BuggyComponent'
import ErrorBoundary from '../components/ErrorBoundary'

// A component that throws a React render error
function ErrorThrowingComponent() {
  throw new Error('Our custom error occurred in the React component!')
}
const Content = () => {
  const { showRenderError, showBoundaryError } = useOutletContext()
  console.log(showRenderError)
  return (
    <div>
      <h1>Content</h1>
      {showRenderError}
      {/* Provoke the React render error */}
      {showRenderError && <ErrorThrowingComponent />}
      {/* Provoke the Error Boundary error */}
      {showBoundaryError && (
        <ErrorBoundary>
          <h2>Content inside Error Boundary</h2>
          <BuggyComponent message={{ text: 'Buggy component prop' }} />
        </ErrorBoundary>
      )}
    </div>
  )
}

export default Content
