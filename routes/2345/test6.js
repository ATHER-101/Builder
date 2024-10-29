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

router.post('/your-route', async (req, res) => {
  const { Client } = require('pg');
  const pool = new Client({
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
    await pool.connect();

    const tableName = 'test';
    const { rows: columnsData } = await pool.query(`
      SELECT column_name FROM information_schema.columns 
      WHERE table_name = $1
    `, [tableName]);

    const columns = columnsData.map(row => row.column_name);
    const values = columns.map(col => req.body[col]);
    
    const placeholders = columns.map((_, index) => `$${index + 1}`).join(', ');
    const query = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${placeholders})`;

    await pool.query(query, values);
    res.status(201).send('Data inserted successfully.');
  } catch (error) {
    res.status(500).send('Error inserting data.');
  } finally {
    await pool.end();
  }
});

router.post('/set-user', async (req, res) => {
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
    // Fetch columns from 'test' table
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


