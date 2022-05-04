import query from '../../connection.js';

async function dropTable() {
  const dropped = await query(`DROP TABLE IF EXISTS batteries;`);
  console.log = ('Dropped Table', dropped);
}

dropTable();
