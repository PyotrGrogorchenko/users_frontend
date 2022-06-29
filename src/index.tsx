import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback'
import { StoreProvider } from './components/prividers/StoreProvider'
import { Router } from './components/Router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </ErrorBoundary>
)
