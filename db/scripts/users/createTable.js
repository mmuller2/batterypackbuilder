import query from '../../connection.js';
//left in case needed , from original express install added line 1 instead
//import db from '../../connection.js';

//left in case needed , from original express install added line 10-18 instead
//const response = db.query(
//  `CREATE TABLE IF NOT EXISTS batteries (id SERIAL PRIMARY KEY, capacity NUMBER);`
//);

const sqlString =
  'CREATE TABLE IF NOT EXISTS batteries (id SERIAL PRIMARY KEY, capacity INT)';

async function createBatteryTable() {
  const res = await query(sqlString);
  console.log('created battery table', res);
}

createBatteryTable();

//part of original express install
//console.log(response);
//db.end();
