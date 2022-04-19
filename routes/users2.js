import express, { urlencoded } from 'express';
//import { json } from 'express/lib/response';
const router = express.Router();

// installed body parser in npm (npm i body-parser) in order to link html form directly to the backend
// this is shown in the package json also. note that ended up not using this
import bodyParser from 'body-parser';
const urlencodedParser = bodyParser.urlencoded({ extended: false });

import {
  getAllBatteries,
  getBatteriesById,
  get10Best,
  get9Best,
  get8Best,
  get7Best,
  get6Best,
  get5Best,
  get4Best,
  getBest,
  get2Best,
  get1Best,
  deleteTable,
  addTable,
} from '../models/users.js';

//GET all batteries
router.get('/', async function (req, res) {
  //Call the function to get the users
  const result = await getAllBatteries();
  //response
  res.json({ success: true, message: `All batteries`, payload: result });
});
//
//
// get picked pack (16.1.22)
router.get('/ideal/:id', async function (req, res) {
  const { id } = req.params;
  console.log(id);
  // call the function to get certain pack
  const pickedPack = await getBest(id);
  res.json({
    success: true,
    message: `Here is your pack`,
    payload: pickedPack,
  });
});
//
//
// GET battery by id
router.get('/:id', async function (req, res) {
  const { id } = req.params;
  const requestedBattery = await getBatteriesById(id);
  res.json({
    success: true,
    message: `Found the battery number ${id}`,
    payload: requestedBattery,
  });
});
//
//
// Delete battery database
router.delete('/', async function (req, res) {
  const deleted = await deleteTable();
  return res.json({ redirect: 'http://localhost:3000' });
});
//
//
//POST to database with new cells
router.post('/', async function (req, res) {
  const newTableBody = req.body;
  //console.log(req.body);
  const newTable = await addTable(newTableBody);
  res.json({ message: true, payload: newTable });
});

export default router;
