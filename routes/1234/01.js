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

router.get('/books', (req, res) => {
  res.json([
    {
      "book_id": "1234567890abcdef",
      "name": "The Hitchhiker's Guide to the Galaxy",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51y-V-9e7SL._SX328_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "9876543210fedcba",
      "name": "The Lord of the Rings",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51L-P2hF3SL._SX328_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "abcdef1234567890",
      "name": "Pride and Prejudice",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51o6w2t2OOL._SX328_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "fedcba9876543210",
      "name": "To Kill a Mockingbird",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51D+0p06xHL._SX328_BO1,204,203,200_.jpg"
    },
    {
      "book_id": "1234567890abcdef",
      "name": "The Great Gatsby",
      "cover_img": "https://images-na.ssl-images-amazon.com/images/I/51s2zV45iWL._SX328_BO1,204,203,200_.jpg"
    }
  ]);
});
