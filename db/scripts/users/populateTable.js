import query from '../../connection.js';
//left in case needed , added line 1 instead
//import db from '../../connection.js';
import batteries from '../../batteries-data.js';

async function populateBatteryTable() {
  for (let i = 0; i < batteries.length; i++) {
    const capacity = batteries[i].capacity;
    const res = await query(`INSERT INTO batteries (capacity) VALUES ($1)`, [
      capacity,
    ]);
    console.log(res);
  }
}

populateBatteryTable();
