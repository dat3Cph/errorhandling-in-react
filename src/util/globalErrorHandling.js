
// Global error handlers / listeners (window.onerror and window.unhandledrejection)

function setupGlobalErrorHandlers() {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error("Global error caught:", { message, source, lineno, colno, error, });
  };

  window.onunhandledrejection = (event) => {
    console.error("Unhandled promise rejection:", event.reason);
  };
}

export default setupGlobalErrorHandlers;