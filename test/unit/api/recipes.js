import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

import { server } from '../../../server';

describe('GET /api/recipes', () => {

    it('it should GET all the recipes', function(done) {
        chai.request(server)
            .get('/api/recipe')
            .end((err, res) => {
                expect(res).have.status(200);
                expect(res.body).be.a('array');
                done();
            });
    });
});