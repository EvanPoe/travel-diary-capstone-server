const knex = require('knex')
const app = require('../src/app');

describe('Item API:', function () {
  let db;
  let items = [
    {
      "user_id": 1,
       "keyword": "Texas",
       "category": "Been There Done That!",
       "rating": 5,
       "cost": 1,
       "currency": "America (United States) Dollars - USD",
       "language": "English",
       "type": "Historical",
       "notes": "test notes, texas",
       "is_public": 1
     },
    {
      "user_id": 1,
       "keyword": "Florida",
       "category": "On My List!",
       "rating": 4,
       "cost": 2,
       "currency": "America (United States) Dollars - USD",
       "language": "English",
       "type": "Outdoor",
       "notes": "test notes, texas",
       "is_public": 1
     },
    {
      "user_id": 1,
       "keyword": "New York",
       "category": "Been There Done That!",
       "rating": 1,
       "cost": 3,
       "currency": "America (United States) Dollars - USD",
       "language": "English",
       "type": "Business",
       "notes": "Ahhh new york. The big apple.",
       "is_public": 0
     }
  ]

  before('make knex instance', () => {  
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  });
  
  before('cleanup', () => db.raw('TRUNCATE TABLE items RESTART IDENTITY;'));

  afterEach('cleanup', () => db.raw('TRUNCATE TABLE items RESTART IDENTITY;')); 

  after('disconnect from the database', () => db.destroy()); 

  describe('GET /api/items', () => {

    beforeEach('insert some items', () => {
      return db('items').insert(items);
    })

    it('should respond to GET `/api/items` with an array of items and status 200', function () {
      return supertest(app)
        .get('/api/items')
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(items.length);
          res.body.forEach((item) => {
            expect(item).to.be.a('object');
          });
        });
    });

  });

  
  describe('GET /api/items/:id', () => {

    beforeEach('insert some items', () => {
      return db('items').insert(items);
    })

    it('should return correct item when given an id', () => {
      let doc;
      return db('items')
        .first()
        .then(_doc => {
          doc = _doc
          return supertest(app)
            .get(`/api/items/${doc.id}`)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.an('object');
        });
    });

    it('should respond with a 404 when given an invalid id', () => {
      return supertest(app)
        .get('/api/items/aaaaaaaaaaaa')
        .expect(404);
    });
    
  });

  
  describe('POST /api/items', function () {

    it('should create and return a new item when provided valid data', function () {
      const newItem = {
        "user_id": 1,
         "keyword": "Italy",
         "category": "Been There Done That!",
         "rating": 4,
         "cost": 3,
         "currency": "Euro - EUR",
         "language": "Italian",
         "type": "Business",
         "notes": "People come for the ruins, they stay for the wine.",
         "is_public": 1
       };

      return supertest(app)
        .post('/api/items')
        .send(newItem)
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.a('object');
        });
    });

    it('should respond with 400 status when given bad data', function () {
      const badItem = {
        foobar: 'broken item'
      };
      return supertest(app)
        .post('/api/items')
        .send(badItem)
        .expect(400);
    });

  });

  
  describe('PATCH /api/items/:id', () => {

    beforeEach('insert some items', () => {
      return db('items').insert(items);
    })

    it('should update item when given valid data and an id', function () {
      const item = {
        "user_id": 1,
         "keyword": "Alaska",
         "category": "Been There Done That!",
         "rating": 2,
         "cost": 3,
         "currency": "America (United States) Dollars - USD",
         "language": "English",
         "type": "Outdoor",
         "notes": "Bring a jacket.",
         "is_public": 0
       };
      
      let doc;
      return db('items')
        .first()
        .then(_doc => {
          doc = _doc
          return supertest(app)
            .patch(`/api/items/${doc.id}`)
            .send(item)
            .expect(200);
        })
        .then(res => {
          expect(res.body).to.be.a('object');
        });
    });

    it('should respond with 400 status when given bad data', function () {
      const badItem = {
        foobar: 'broken item'
      };
      
      return db('items')
        .first()
        .then(doc => {
          return supertest(app)
            .patch(`/api/items/${doc.id}`)
            .send(badItem)
            .expect(400);
        })
    });

    it('should respond with a 404 for an invalid id', () => {
      const item = {
        "user_id": 1,
         "keyword": "Alaska",
         "category": "Been There Done That!",
         "rating": 2,
         "cost": 3,
         "currency": "America (United States) Dollars - USD",
         "language": "English",
         "type": "Outdoor",
         "notes": "Bring a jacket.",
         "is_public": 0
       };
      return supertest(app)
        .patch('/api/items/aaaaaaaaaaaaaaaaaaaaaaaa')
        .send(item)
        .expect(404);
    });

  });

  describe('DELETE /api/items/:id', () => {

    beforeEach('insert some items', () => {
      return db('items').insert(items);
    })

    it('should delete an item by id', () => {
      return db('items')
        .first()
        .then(doc => {
          return supertest(app)
            .delete(`/api/items/${doc.id}`)
            .expect(204);
        })
    });

    it('should respond with a 404 for an invalid id', function () {
      
      return supertest(app)
        .delete('/api/items/aaaaaaaaaaaaaaaaaaaaaaaa')
        .expect(404);
    });

  });

});
