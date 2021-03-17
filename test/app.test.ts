import { expect } from 'chai';
import app from '../src/app';
import { agent } from 'supertest';
import mongoose from 'mongoose';

var server: any;
beforeEach(function () {
  server = app;
});
afterEach(() => {
  server.close();
  mongoose.disconnect();
});

describe("API Test", () => {
    it('should GET /', async function () {
        const res = await agent(app).get('/');
        expect(res.status).to.equal(200);
        expect(res.body.response).to.equal('The app is running!');
    });
});