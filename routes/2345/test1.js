const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/user1', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30
    }
  ]);
});

router.get('/user2', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30
    },
    {
      "user_id": "user456",
      "name": "Jane Doe",
      "age": 25
    }
  ]);
});

router.get('/user2', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30
    },
    {
      "user_id": "user456",
      "name": "Jane Doe",
      "age": 25
    }
  ]);
});

router.get('/products', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Product 1",
      "price": 10.99,
      "description": "This is a great product."
    },
    {
      "id": 2,
      "name": "Product 2",
      "price": 20.99,
      "description": "Another great product."
    },
    {
      "id": 3,
      "name": "Product 3",
      "price": 30.99,
      "description": "This is a good product."
    }
  ]);
});

router.get('/users', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net"
    }
  ]);
});

router.get('/user2', (req, res) => {
  res.json([
    {
      "user_id": "user123",
      "name": "John Doe",
      "age": 30
    },
    {
      "user_id": "user456",
      "name": "Jane Doe",
      "age": 25
    }
  ]);
});
