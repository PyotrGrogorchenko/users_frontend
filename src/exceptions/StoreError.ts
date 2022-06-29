export type ValidationError = {
  value: string
  msg: string
  param: string
  location: string
}

export type TypeError = 'info' | 'error' | 'warn'

export class StoreError extends Error {
  status = 404
  errors: ValidationError[] = []
  isHTTPError = true

  constructor(err: Partial<StoreError>) {
    super(err.message)
    this.status = err.status ?? 404
    this.errors = err.errors ?? []
  }
}
