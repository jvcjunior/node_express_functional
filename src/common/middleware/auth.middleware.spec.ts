import { NextFunction } from 'express';
import { createJwtToken } from '../utils/auth.utils';
import { checkJwt } from './auth.middleware';
const httpMocks = require('node-mocks-http');

let nextFunction: NextFunction = jest.fn();

describe('Authorization middleware', () => {
    test('request without headers', async () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        checkJwt(req, res, nextFunction)
        expect(res.statusCode).toEqual(403);
    });

    test('request without "authorization" header', async () => {
        const req = httpMocks.createRequest({
          headers: {}
        });
        const res = httpMocks.createResponse();
        checkJwt(req, res, nextFunction)
        expect(res.statusCode).toEqual(403);
    });

    test('request with "authorization" header', async () => {
        const jwtToken = createJwtToken({});
        const req = httpMocks.createRequest({
          headers: {
            'authorization': `Bearer ${jwtToken}`
          }
        });
        const res = httpMocks.createResponse();
        checkJwt(req, res, nextFunction)

        expect(nextFunction).toBeCalledTimes(1);
    });

    test('request with wrong jwt "authorization" header', async () => {
      const req = httpMocks.createRequest({
        headers: {
          'authorization': `Bearer abc`
        }
      });
      const res = httpMocks.createResponse();
      checkJwt(req, res, nextFunction)

      expect(res.statusCode).toEqual(401);
  });
});