function PageNotFound({ errorMessage }) {
  return (
    errorMessage && (
      <div style={{ marginTop: '30px', backgroundColor: 'red', color: 'white', padding: '10px' }}>
        <strong>Error:</strong> {errorMessage}
      </div>
    )
  )
}

export default PageNotFound
