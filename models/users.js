import query from '../db/connection.js';

// return all batteries
export async function getAllBatteries() {
  const result = await query(`SELECT * FROM batteries`);
  return result.rows;
}

// get batteries id
export async function getBatteriesById(id) {
  //const catsId = Number(req.params.id);
  const dataId = await query('SELECT * FROM batteries WHERE id = $1', [id]);
  return dataId.rows;
}

//get best pack (number)
export async function getBest(num) {
  const best3 = await query(
    `SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT $1`,
    [Number(num)]
  );
  return best3.rows;
}

// add to table
export async function addTable(insert) {
  const item = insert.capacity;
  console.log(item);
  const added = await query(
    `INSERT INTO batteries(capacity) VALUES ($1) RETURNING *;`,
    [item]
  );
  return added.rows;
}

// erase contents of the table
export async function deleteTable() {
  const deleted = await query(
    `TRUNCATE TABLE batteries RESTART IDENTITY CASCADE;`
  );
  return deleted.rows;
}

// get bigger capacity numbers
//10s
export async function get10Best(limit) {
  const best10 = await query(
    `SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT $1`,
    [limit]
  );
  return best10.rows;
}
