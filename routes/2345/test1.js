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

router.get('/users', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }
  ]);
});

router.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      age: 25
    }
  ]);
});

router.get('/user3', (req, res) => {
  res.json([
    { "user_id": "user1", "name": "Alice", "age": 25 },
    { "user_id": "user2", "name": "Bob", "age": 30 },
    { "user_id": "user3", "name": "Charlie", "age": 28 }
  ]);
});

router.post('/insert-user', async (req, res) => {
    const { Pool } = require('pg');
    const pool = new Pool({
    host: "ep-jolly-glitter-a40z54ab.us-east-1.aws.neon.tech",
    port: 5432,
    user: "neondb_owner",
    password: "Rhm5pKdjblE3",
    database: "neondb",
    ssl: { rejectUnauthorized: false }
    });

    try {
    const columnsRes = await pool.query(`
        SELECT column_name
        FROM information_schema.columns
        WHERE table_name = 'test';
    `);

    const columns = columnsRes.rows.map(row => row.column_name);

    // Extract data from request body
    const values = req.body.map(row => columns.map(col => row[col]));

    // Generate query for inserting rows
    const queryText = `
        INSERT INTO test (${columns.join(', ')})
        VALUES ${values.map((_, i) => `(${columns.map((_, j) => `$${i * columns.length + j + 1}`).join(', ')})`).join(', ')}
    `;

    // Flatten values array for parameterized query
    const flattenedValues = values.flat();
    
    // Execute insert query
    await pool.query(queryText, flattenedValues);
    
    res.status(201).send('Data inserted successfully');
    } catch (error) {
    console.error(error);
    res.status(500).send('Error inserting data');
    } finally {
    pool.end();
    }
});
    
router.post('/insert-user-2', async (req, res) => {
    const { Pool } = require('pg');
    const pool = new Pool({
    host: "ep-jolly-glitter-a40z54ab.us-east-1.aws.neon.tech",
    port: 5432,
    user: "neondb_owner",
    password: "Rhm5pKdjblE3",
    database: "neondb",
    ssl: { rejectUnauthorized: false }
    });

    try {
    const columnsRes = await pool.query(`
        SELECT column_name
        FROM information_schema.columns
        WHERE table_name = 'test';
    `);

    const columns = columnsRes.rows.map(row => row.column_name);

    // Extract data from request body
    const values = req.body.map(row => columns.map(col => row[col]));

    // Generate query for inserting rows
    const queryText = `
        INSERT INTO test (${columns.join(', ')})
        VALUES ${values.map((_, i) => `(${columns.map((_, j) => `$${i * columns.length + j + 1}`).join(', ')})`).join(', ')}
    `;

    // Flatten values array for parameterized query
    const flattenedValues = values.flat();
    
    // Execute insert query
    await pool.query(queryText, flattenedValues);
    
    res.status(201).send('Data inserted successfully');
    } catch (error) {
    console.error(error);
    res.status(500).send('Error inserting data');
    } finally {
    pool.end();
    }
});

    
router.get('/get-users', async (req, res) => {
  const { Pool } = require('pg');
  const pool = new Pool({
    host: "ep-jolly-glitter-a40z54ab.us-east-1.aws.neon.tech",
    port: 5432,
    user: "neondb_owner",
    password: "Rhm5pKdjblE3",
    database: "neondb",
    ssl: {
        rejectUnauthorized: false,
    },
  });

  try {
    const result = await pool.query('SELECT * FROM test WHERE age < 30 AND LENGTH(name) < 5');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  } finally {
    pool.end();
  }
});

router.get('/get-users-1', async (req, res) => {
  const { Pool } = require('pg');
  const pool = new Pool({
    host: "ep-jolly-glitter-a40z54ab.us-east-1.aws.neon.tech",
    port: 5432,
    user: "neondb_owner",
    password: "Rhm5pKdjblE3",
    database: "neondb",
    ssl: {
        rejectUnauthorized: false,
    },
  });

  try {
    const result = await pool.query('SELECT * FROM test WHERE name LIKE \'a%\' AND age < 30');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get users' });
  } finally {
    pool.end();
  }
});
