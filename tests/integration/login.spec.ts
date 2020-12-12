import HttpStatus from 'http-status-codes';
import request from 'supertest'
import app from '../../src/app'

describe('Integration tests - Login', () => {
it('should return 404 when no data is passed on body', async () => {
    const res = await request(app).post('/api/login');
    expect(res.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });
it('should return 404 when invalid email', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'Turma 1',
      });
    expect(res.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });
  it('should return 404 when valid email but no password', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'email@email.com',
      });
    expect(res.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });

  it('should return 404 when valid email but invalid password', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'email@email.com',
        password: ''
      });
    expect(res.status).toBe(HttpStatus.UNPROCESSABLE_ENTITY);
  });
  it('should return 401 when valid email and password but user does not exist', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'email@email.com',
        password: '123123'
      });
    expect(res.status).toBe(HttpStatus.UNAUTHORIZED);
  });
});