import chai, { expect} from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import { server } from '../../../server';
import Recipe from '../../../models/recipes.model';
chai.use(chaiHttp);

describe('Recipes Resource', function() {
    let testID;

    before(function(done) {
        const seed = new Recipe({
            title: 'test-title',
            imgUrl: 'test-url',
            ingredients: ['ingredient-a', 'ingredient-b'],
            steps: [{description: 'step-1', order:1}, {description: 'step-2', order:2}]
        });
        seed.save()
            .then(data => {
                testID = data._id;
                done();
            })
            .catch(err => done(err));
    });

    describe('GET /api/recipe', () => {
        it('it should get all the recipes.', function(done) {
            chai.request(server)
                .get('/api/recipe')
                .end((err, res) => {
                    expect(res).have.status(200);
                    expect(res.body).be.a('array');
                    expect(res.body).to.have.length(1);
                    done(err);
                });
        });
    });

    describe('GET /api/recipe/{recipe}', () => {
        it('it should get the seed recipes.', function(done) {
            chai.request(server)
                .get(`/api/recipe/${testID}`)
                .end((err, res) => {
                    expect(res).have.status(200);
                    expect(res.body).to.have.include({title: 'test-title', imgUrl: 'test-url'});
                    done(err);
                });
        });

        it('it should get 404 Error.', function(done) {
            chai.request(server)
                .get('/api/recipe/wrong-id')
                .end((err, res) => {
                    expect(res).have.status(404);
                    done(err);
                });
        });
    });

    describe('POST /api/recipe', function() {
        it('saves a new task', function(done) {
            chai.request(server)
                .post('/api/recipe')
                .send({
                    title: 'test-title',
                    imgUrl: 'test-url',
                    ingredients: ['ingredient-a', 'ingredient-b'],
                    steps: [{description: 'step-1', order:1}, {description: 'step-2', order:2}]
                })
                .end(function(err, res) {
                    expect(res).have.status(201);
                    done(err);
                });
        });
    });

    describe('PUT /api/recipe/{recipe}', function() {
        it('update recipe.', function(done) {
            chai.request(server)
                .put(`/api/recipe/${testID}`)
                .send({title: 'updated-title'})
                .end(function(err, res) {
                    expect(res).have.status(201);
                    done(err);
                });
        });
    });

    describe('DELETE /api/recipe/{recipe}', function() {
        it('delete recipe.', function(done) {
            chai.request(server)
                .delete(`/api/recipe/${testID}`)
                .end(function(err, res) {
                    expect(res).have.status(201);
                    done(err);
                });
        });
    });

    //run once after all tests
    after(function (done) {
        console.log('===================\nDeleting test database.');
        mongoose.connection.db.dropDatabase(done);
    });
});