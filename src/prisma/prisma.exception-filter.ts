import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const message = exception.message.replace(/\n/g, '');

        switch (exception.code) {
            case 'P2002':
                response
                    .status(HttpStatus.CONFLICT)
                    .json({
                        statusCode: HttpStatus.CONFLICT,
                        message: 'Unique constraint failed on the field: ' + exception.meta.target,
                    });
                break;
            case 'P2025':
                response
                    .status(HttpStatus.NOT_FOUND)
                    .json({
                        statusCode: HttpStatus.NOT_FOUND,
                        message: 'Record to update not found.',
                    });
                break;
            default:
                response
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({
                        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                        message: 'An error occurred while processing your request.',
                    });
        }
    }
}