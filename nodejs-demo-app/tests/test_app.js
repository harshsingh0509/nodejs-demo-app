const request = require('supertest'); 
const app = require('../src/app'); 
 
describe('API Tests', () =
   test('GET /api/hello', async () =
       const response = await request(app).get('/api/hello'); 
       expect(response.status).toBe(200); 
       expect(response.body.message).toBe('Hello, World!'); 
   }); 
}); 
