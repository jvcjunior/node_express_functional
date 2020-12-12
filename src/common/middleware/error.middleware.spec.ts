import HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { createJwtToken } from '../utils/auth.utils';
import BaseError from '../utils/baseError.utils';
import { handler } from './error.middleware';
const httpMocks = require('node-mocks-http');

let nextFunction: NextFunction = jest.fn();

describe('Error middleware', () => {
    test('should call next when no operational error happend', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        handler(new BaseError("", HttpStatus.INTERNAL_SERVER_ERROR, "Error", false), req, res, nextFunction);
        expect(nextFunction).toBeCalledTimes(1);
      });

    test('should send same status when some no operational base error happend', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        await handler(new BaseError("", HttpStatus.INTERNAL_SERVER_ERROR, "Error", false), req, res, nextFunction);
        expect(res.statusCode).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
      });

      test('should send same status when some no operational error happend', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        await handler(new Error(), req, res, nextFunction);
        expect(res.statusCode).toEqual(HttpStatus.INTERNAL_SERVER_ERROR);
      });

    
});