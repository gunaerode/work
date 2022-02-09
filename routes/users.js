var express = require('express');
const { dbName, dbUrl, MongoClient } = require('../dbSchema');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
  } catch (error) {
  } finally {
    client.close();
  }
});

router.post('/signup', async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = await client.db(dbName);
    const users = await db
      .collection('users')
      .find({ email: req.body.email })
      .toArray();
    if (users.length > 0) {
      res.json({
        status: 400,
        message: 'user already exists',
      });
    } else {
      const document = await db.collection('users').insertOne(req.body);
      res.json({
        status: 201,
        message: 'Sign up successful',
        data: document,
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: 'internal server error',
    });
  } finally {
    client.close();
  }
});

router.post('/login', async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
    const db = await client.db(dbName);
    const user = await db
      .collection('users')
      .find({ email: req.body.email })
      .toArray();
    console.log(user.password, req.body.password);
    if (user[0].password === req.body.password) {
      res.json({
        status: 200,
        message: 'Login successfull',
      });
    } else {
      res.json({
        status: 400,
        message: 'Invalid Credentials',
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      message: 'internal server error',
    });
  } finally {
    client.close();
  }
});

module.exports = router;
