class ValidationError extends Error {
  constructor(error) {
    super(error instanceof Error ? error.message : error)
    this.name = 'ValidationError'
    this.code = 'err.invalid.input'
    this.status = 400
  }
}

module.exports = ValidationError
