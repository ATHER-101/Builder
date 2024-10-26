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
      "animal_id": "f876a543-292d-489d-892a-305014d7285e",
      "name": "Golden Retriever",
      "image": "https://images.unsplash.com/photo-1508923551106-30e4905b0a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "animal_id": "d2b74c35-a595-42d8-898c-9295a8193f84",
      "name": "Siamese Cat",
      "image": "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "animal_id": "6a46670a-9b87-45a6-99a9-f679dfb6a216",
      "name": "African Grey Parrot",
      "image": "https://images.unsplash.com/photo-1586303970407-d34e621088b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "animal_id": "93d54c7c-04e2-4105-a561-058527857c35",
      "name": "Bengal Tiger",
      "image": "https://images.unsplash.com/photo-1561672956-92441792194d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      "animal_id": "e37269d3-a63a-4c0d-b748-d8b8650b0d45",
      "name": "German Shepherd",
      "image": "https://images.unsplash.com/photo-1534928769421-1a5580b36380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ]);
});
