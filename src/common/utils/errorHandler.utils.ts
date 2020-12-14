import { logger } from './logger.utils';
import BaseError from "../../exceptions/BaseError";

class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.error(
      'Error message from the centralized error-handling component',
      err,
    );
  }
  
  public isTrustedError(error: Error) {
    if (error instanceof BaseError) {
      return error.isOperational;
    }
    return false;
  }
 }
 export const errorHandler = new ErrorHandler();