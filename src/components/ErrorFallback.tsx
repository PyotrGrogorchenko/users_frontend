import { FC } from 'react'

export const ErrorFallback: FC<{ error: any, resetErrorBoundary: any }> = ({ error, resetErrorBoundary }) => {
  console.log('ErrorFallback', error)
  return (<div>ERROR</div>)
}
