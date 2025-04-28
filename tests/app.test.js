const request = require('supertest');
const app = require('../server');

describe('Simon Says Game API', () => {
    let server;

    beforeAll((done) => {
        server = app.listen(0, done); // Use port 0 to pick a random free port
    });

    afterAll((done) => {
        server.close(done); // Close server to prevent open handles
    });

    it('GET / should return the game HTML', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toContain('<h1>Simon Says Game</h1>');
    });

    it('POST /tasks should create a task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({ task: 'Test task' });
        expect(res.status).toBe(201);
        expect(res.body).toEqual({ message: 'Task created', task: 'Test task' });
    });

    it('POST /tasks should return 400 if task is missing', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({});
        expect(res.status).toBe(400);
        expect(res.body).toEqual({ error: 'Task is required' });
    });
});