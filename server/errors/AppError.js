class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.status = statusCode.toString().startsWith('4') ? 'failure' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
