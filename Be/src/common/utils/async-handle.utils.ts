import {
  HttpException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

export async function asyncHandleOperation<T>(
  operation: () => Promise<T>,
  errorMessage: string,
): Promise<T> {
  const logger = new Logger('Exception');

  try {
    return await operation();
  } catch (error: unknown) {
    if (error instanceof HttpException) {
      logger.error(
        `${errorMessage} => ${JSON.stringify(error.getResponse())}`,
        error.stack,
      );
      throw error;
    }

    logger.error(
      `${errorMessage} => ${String(error)}`,
      error instanceof Error ? error.stack : undefined,
    );

    throw new InternalServerErrorException(errorMessage);
  }
}
