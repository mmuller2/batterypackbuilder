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
//9s
export async function get9Best() {
  const best9 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 9`);
  return best9.rows;
}
//8s
export async function get8Best() {
  const best8 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 8`);
  return best8.rows;
}
//7s
export async function get7Best() {
  const best7 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 7`);
  return best7.rows;
}

//6s
export async function get6Best() {
  const best6 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 6`);
  return best6.rows;
}

//5s
export async function get5Best() {
  const best5 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 5`);
  return best5.rows;
}

//4s
export async function get4Best() {
  const best4 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 4`);
  return best4.rows;
}

//2s
export async function get2Best() {
  const best2 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 2`);
  return best2.rows;
}

//1s
export async function get1Best() {
  const best1 = await query(`SELECT * 
  FROM batteries 
 ORDER BY capacity DESC  
 LIMIT 1`);
  return best1.rows;
}
