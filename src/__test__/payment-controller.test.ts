import request from 'supertest';
import app from '../app';

// describe('Payment API', () => {
  describe('POST /initialize-payment', () => {
    
        
    it('should return a 400 status if email is missing', async () => {
      const res = await request(app)
        .post('/initialize-payment')
        .send({
          phone_number: '+2348123456789',
          Booking: 'Booking123',
          name: 'John Doe',
          amount: 1000,
        });
      expect(res.status).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Email is required');
    });

    it('should return a 400 status if phone number is missing', async () => {
      const res = await request(app)
        .post('/initialize-payment')
        .send({
          email: 'test@example.com',
          Booking: 'Booking123',
          name: 'John Doe',
          amount: 1000,
        });
      expect(res.status).toEqual(400);
      expect(res.body).toHaveProperty('message', 'Phone number is required');
    });
  });

  describe('GET /validate-payment/:transaction_id', () => {
    

    it('should return a 400 status if the transaction is invalid', async () => {
      const res = await request(app).get('/validate-payment/invalid_id');
      expect(res.status).toEqual(404);
    });
  });
// });
