/*const assert = require('assert');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('"bikes" database', () => {
  it('should have a table named "customers"', async () => {
    const query = 'SELECT * FROM customers;'

    try {
      await client.connect();
      const res = await client.query(query);
      assert(!!res);
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});*/
