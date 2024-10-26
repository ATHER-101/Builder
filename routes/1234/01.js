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

router.get('/animals', (req, res) => {
  res.json([
    {
      "animal_id": "f876a452-4564-4874-8b87-e776a8d675d8",
      "name": "Dog",
      "image": "https://images.unsplash.com/photo-1509721492673-95b1b887838e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "e5217344-2248-4958-a518-8a5445b7e023",
      "name": "Cat",
      "image": "https://images.unsplash.com/photo-1543464788-0d41980d529c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "f7518d53-6f7f-4140-b720-38d9398834ef",
      "name": "Bird",
      "image": "https://images.unsplash.com/photo-1581241122291-394e2c05fa0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "d47d6732-a78a-4557-a57c-01497f11f792",
      "name": "Fish",
      "image": "https://images.unsplash.com/photo-1571466810255-628097220a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      "animal_id": "3df4a966-b2a2-43a3-a8a8-114a0a5eb96f",
      "name": "Rabbit",
      "image": "https://images.unsplash.com/photo-1585463211228-485965c87519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ]);
});

router.get('/animals', (req, res) => {
  res.json([
    {
      "animal_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "name": "Golden Retriever",
      "image": "https://images.unsplash.com/photo-1508921912046-7a5d12f6266f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "animal_id": "995a7b64-4a91-4974-a97e-034422e14806",
      "name": "Siamese Cat",
      "image": "https://images.unsplash.com/photo-1543466835-00a7904e90c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "animal_id": "691f5085-d647-439f-a24e-313602590439",
      "name": "African Grey Parrot",
      "image": "https://images.unsplash.com/photo-1558978480-4504d14a9245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "animal_id": "7048a042-a019-4b35-bc3d-9f0b31e85600",
      "name": "Bengal Tiger",
      "image": "https://images.unsplash.com/photo-1573167725866-5c07d1008d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      "animal_id": "d2463321-8333-4e19-a0e8-9d50b0e88824",
      "name": "German Shepherd",
      "image": "https://images.unsplash.com/photo-1517849845537-4d2578861807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
  ]);
});
