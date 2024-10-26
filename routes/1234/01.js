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

router.get('/animals', (req, res) => {
  res.json([
    {
      "animal_id": "b879c567-a471-48f2-b253-d80426e45277",
      "name": "Golden Retriever",
      "image": "https://images.unsplash.com/photo-1508923652103-8ba725ecd7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "1937f693-b65c-450b-a73a-5234107633e4",
      "name": "Siamese Cat",
      "image": "https://images.unsplash.com/photo-1532373359642-2a0d224e41c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "8e3e0489-554d-4681-8d55-12280e734f2b",
      "name": "African Grey Parrot",
      "image": "https://images.unsplash.com/photo-1549375430-053c3932e98b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "269f4813-97d2-4604-80c1-099a6b3c7319",
      "name": "Bengal Tiger",
      "image": "https://images.unsplash.com/photo-1535040460856-216785c13556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "d7c125b7-b7b6-4519-813a-9384399d520c",
      "name": "Red-eared Slider Turtle",
      "image": "https://images.unsplash.com/photo-1529751877344-a072521f8076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ]);
});
