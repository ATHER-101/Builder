const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

router.get('/user', (req, res) => {
  res.json([
    { user_id: 'user1', name: 'John Doe', age: 30 },
    { user_id: 'user2', name: 'Jane Doe', age: 25 },
    { user_id: 'user3', name: 'Peter Pan', age: 20 },
    { user_id: 'user4', name: 'Alice Wonderland', age: 28 },
    { user_id: 'user5', name: 'Bob Builder', age: 35 }
  ]);
});

router.get('/products', (req, res) => {
  res.json([
    { "product_id": "p1", "name": "Product 1", "age": 10 },
    { "product_id": "p2", "name": "Product 2", "age": 20 },
    { "product_id": "p3", "name": "Product 3", "age": 30 },
    { "product_id": "p4", "name": "Product 4", "age": 40 },
    { "product_id": "p5", "name": "Product 5", "age": 50 }
  ]);
});

router.get('/dinosaur', (req, res) => {
  res.json([
    { dino_id: '1', name: 'Triceratops', age: 65 },
    { dino_id: '2', name: 'Stegosaurus', age: 150 },
    { dino_id: '3', name: 'Tyrannosaurus Rex', age: 67 },
    { dino_id: '4', name: 'Velociraptor', age: 75 },
    { dino_id: '5', name: 'Brachiosaurus', age: 100 },
    { dino_id: '6', name: 'Ankylosaurus', age: 66 },
    { dino_id: '7', name: 'Parasaurolophus', age: 72 },
    { dino_id: '8', name: 'Diplodocus', age: 100 },
    { dino_id: '9', name: 'Compsognathus', age: 150 },
    { dino_id: '10', name: 'Pachycephalosaurus', age: 80 }
  ]);
});

router.get('/subhash', (req, res) => {
  res.json([
    { subash_id: '1', name: 'Subhash1', age: 25 },
    { subash_id: '2', name: 'Subhash2', age: 30 },
    { subash_id: '3', name: 'Subhash3', age: 28 },
    { subash_id: '4', name: 'Subhash4', age: 22 },
    { subash_id: '5', name: 'Subhash5', age: 35 }
  ]);
});

router.get('/books', (req, res) => {
  res.json([
    {
      "book_id": "1234567890abcdef",
      "name": "The Hitchhiker's Guide to the Galaxy",
      "cover_img": "https://example.com/hitchhikers-guide.jpg"
    },
    {
      "book_id": "9876543210fedcba",
      "name": "The Lord of the Rings",
      "cover_img": "https://example.com/lord-of-the-rings.jpg"
    },
    {
      "book_id": "abcdef1234567890",
      "name": "1984",
      "cover_img": "https://example.com/1984.jpg"
    },
    {
      "book_id": "fedcba9876543210",
      "name": "Pride and Prejudice",
      "cover_img": "https://example.com/pride-and-prejudice.jpg"
    },
    {
      "book_id": "0123456789abcdef",
      "name": "To Kill a Mockingbird",
      "cover_img": "https://example.com/to-kill-a-mockingbird.jpg"
    }
  ]);
});

router.get('/books', (req, res) => {
  res.json([
    {
      "book_id": "1234567890abcdef",
      "name": "The Hitchhiker's Guide to the Galaxy",
      "cover_img": "https://example.com/hitchhikers-guide-cover.jpg"
    },
    {
      "book_id": "9876543210fedcba",
      "name": "Pride and Prejudice",
      "cover_img": "https://example.com/pride-and-prejudice-cover.jpg"
    },
    {
      "book_id": "0123456789fedcba",
      "name": "To Kill a Mockingbird",
      "cover_img": "https://example.com/to-kill-a-mockingbird-cover.jpg"
    },
    {
      "book_id": "8765432109abcdef",
      "name": "1984",
      "cover_img": "https://example.com/1984-cover.jpg"
    },
    {
      "book_id": "7654321098fedcba",
      "name": "The Lord of the Rings",
      "cover_img": "https://example.com/lord-of-the-rings-cover.jpg"
    }
  ]);
});

router.get('/books', (req, res) => {
  res.json([
    {
      "book_id": "f843446c-4125-4a79-931c-1843d2595c14",
      "name": "The Hitchhiker's Guide to the Galaxy",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/516-y8u6gLL._SX327_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "a3232783-21c9-460d-b0b3-633962e3d648",
      "name": "The Lord of the Rings",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/519dR78kQLL._SX329_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "d47d3d91-51dd-4a4c-922b-2d158797d141",
      "name": "1984",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51i-hD7YvVL._SX327_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "54b47887-7409-4272-b6b7-09969d9a2755",
      "name": "Pride and Prejudice",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51d9y8-D4DL._SX327_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "0e814f3b-6692-458e-b993-83d9e2a4974b",
      "name": "To Kill a Mockingbird",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51yJ7Z8h0SL._SX327_BO1,204,203,200_.jpg"
    }
  ]);
});
