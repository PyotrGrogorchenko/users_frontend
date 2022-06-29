import { FC } from 'react'

export const ErrorFallback: FC<{ error: any, resetErrorBoundary: any }> = ({ error, resetErrorBoundary }) => {
  console.log('ErrorFallback', error)
  return (<div>ERROR</div>)
  // return (
  //   <div role='alert'>
  //     <p>Something went wrong:</p>
  //     <pre>{error.message}</pre>
  //     <button onClick={resetErrorBoundary}>Try again</button>
  //   </div>
  // )
}
