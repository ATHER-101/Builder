const express = require('express');
const router = express.Router();

module.exports = router;


router.post('/put-data', async (req, res) => {
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
        WHERE table_name = 'amit';
    `);

    const columns = columnsRes.rows.map(row => row.column_name);

    // Extract data from request body
    const values = req.body.map(row => columns.map(col => row[col]));

    // Generate query for inserting rows
    const queryText = `
        INSERT INTO amit (${columns.join(', ')})
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

    
router.get('/get-subject-data', async (req, res) => {
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
    const result = await pool.query('SELECT DISTINCT subject FROM amit');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving subject data');
  } finally {
    pool.end();
  }
});

router.get('/get-users', async (req, res) => {
  const { Pool } = require('pg');
  const pool = new Pool({
    host: 'ep-jolly-glitter-a40z54ab.us-east-1.aws.neon.tech',
    port: 5432,
    user: 'neondb_owner',
    password: 'Rhm5pKdjblE3',
    database: 'neondb',
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const result = await pool.query('SELECT * FROM amit WHERE name LIKE \'a%\';');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get users' });
  } finally {
    pool.end();
  }
});

router.post('/put-details', async (req, res) => {
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
        WHERE table_name = 'amit';
    `);

    const columns = columnsRes.rows.map(row => row.column_name);

    // Extract data from request body
    const values = req.body.map(row => columns.map(col => row[col]));

    // Generate query for inserting rows
    const queryText = `
        INSERT INTO amit (${columns.join(', ')})
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

    