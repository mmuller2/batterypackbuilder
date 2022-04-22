import query from '../db/connection.js';
//
// get all batteries
export async function getAllBatteries() {
  const result = await query(`SELECT * FROM batteries`);
  return result.rows;
}
//
// get batteries id
export async function getBatteriesById(id) {
  //const catsId = Number(req.params.id);
  const dataId = await query('SELECT * FROM batteries WHERE id = $1', [id]);
  return dataId.rows;
}
//
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
//
// add batteries to table
export async function addTable(insert) {
  const item = insert.capacity;
  console.log(item);
  const added = await query(
    `INSERT INTO batteries(capacity) VALUES ($1) RETURNING *;`,
    [item]
  );
  return added.rows;
}
//
// erase all batteries
export async function deleteTable() {
  const deleted = await query(
    `TRUNCATE TABLE batteries RESTART IDENTITY CASCADE;`
  );
  return deleted.rows;
}
//
// erase battery by id
export async function deleteBatteryByID(id) {
  const deleted = await query(`DELETE FROM batteries WHERE id IN ($1)`, [id]);
  return deleted.rows;
}
//
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
