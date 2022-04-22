// query select button
// query select location of .. in the dom
//add event listener (click) to do x once button is pressed
//

const url = 'http://localhost:3000';
//
///////////////////////// DELETE batteries by IDs////////////////////////////////
// gets the number input from input field for Delete battery by id
const DeleteByIdValue = document.querySelector('#DeleteById');
// event listener and button  to DELETE battery bt id
const deletePackId = document.querySelector('#deletePackId');
deletePackId.addEventListener('click', deleteId);
//
// DELETE battery by id (interaction with the api)
async function deleteId() {
  const response = await fetch(`${url}/batteries/${DeleteByIdValue.value}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
}
//
///////////////////////// DELETE all batteries/////////////////////////////////
// event listener selects and button click to DELETE all batteries
const deletePack = document.querySelector('#deletePack');
deletePack.addEventListener('click', deleteAll);
//
// DELETE all batteries (interaction with the api)
async function deleteAll() {
  const response = await fetch(`${url}/batteries`, { method: 'DELETE' })
    .then((response) => response.json())
    .then((data) => (window.location.href = data.redirect));
}
/////////////////////////// End DELETE all batteries////////////////////////////
//
///////////////////////// Get Battery by Id ////////////////////////////////////
// gets the number input from input field for GET battery by id
const inputValueById = document.querySelector('#inputValueById');
// creates DOM space for battery by id
const creatingDOMelement3 = document.querySelector('#creatingDOMelement3');
// event listener and button  to call battery by id
const getBattId = document.querySelector('#getPackId');
getBattId.addEventListener('click', getBattById);
//
// GET battery by id (interaction with the api)
async function getBattById() {
  const response = await fetch(`${url}/batteries/${inputValueById.value}`);
  const { payload } = await response.json();
  console.log(payload);
  const pickedByIdArr = payload.map((input) => {
    byId(input.id, input.capacity);
  });
}
//
// creates element space in the DOM (get batteries by id)
function byId(id, capacity) {
  const idList = document.createElement('li');
  idList.innerHTML = `<p>ID:${id}, Capacity:${capacity}</p>`;
  creatingDOMelement3.appendChild(idList);
  console.log('get batteries by id button pressed');
}
///////////////////////// End of Get Battery by Id //////////////////////////////
//
///////////////////////// Get all Batteries /////////////////////////////////////
// creates DOM space for GET all batteries
const creatingDOMelement = document.querySelector('#creatingDOMelement');
// event listener and button  to GET all batteries
const getBatteries = document.querySelector('#getPack');
getBatteries.addEventListener('click', getAll);
//
//GET all batteries (interaction with api)
async function getAll() {
  const response = await fetch(`${url}/batteries`);
  const { payload } = await response.json();
  console.log(payload);
  const newArr = payload.map((input) => {
    hello(input.id, input.capacity);
  });
}
//
// creates element space in the DOM (get all batteries)
function hello(id, capacity) {
  const list = document.createElement('li');
  list.innerHTML = `<p>ID:${id}, Capacity:${capacity}</p>`;
  creatingDOMelement.appendChild(list);
  console.log('get all batteries button pressed');
}
///////////////////////// End of Get all Batteries ///////////////////////////////
//
/////////////////////////// Get picked pack (size) ///////////////////////////////
// gets the number input from input field for GET picked pack
const inputValue = document.querySelector('#inputValue');
// creates DOM space for GET picked pack
const creatingDOMelement2 = document.querySelector('#creatingDOMelement2');
// event listener and button  to GET picked pack
const getIdealPack = document.querySelector('#three');
getIdealPack.addEventListener('click', getIdeal);
//
// GET picked battery pack (interaction with the api)
async function getIdeal() {
  const response = await fetch(`${url}/batteries/ideal/${inputValue.value}`);
  const { payload } = await response.json();
  console.log(payload);
  //adds and maps through the new pack (array) and sends it to the dom
  const pickedArr = payload.map((input) => {
    pickedSpot(input.id, input.capacity);
  });
}
//
// creates element space in the DOM (get picked pack)
function pickedSpot(id, capacity) {
  const pickedlist = document.createElement('li');
  pickedlist.innerHTML = `<p>ID:${id}, Capacity:${capacity}</p>`;
  creatingDOMelement2.appendChild(pickedlist);
  console.log('get best pack button pressed');
}
/////////////////////////End of Get picked pack (size) ////////////////////////////
//
///////////////////////////POST new batteries /////////////////////////////////////
const addTable = document.querySelector('#submitYourPack');
// event listener and button  to DELETE all batteries
const form = document.querySelector('#submitform');
form.addEventListener('submit', handlerForm);
//
//Intercept the flowFrom form
// intercept if form is empty then return nothing, else submit the data(post)
function handlerForm(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = data.getAll('capacity');
  value.map((capacity) => {
    if (capacity === '') {
      return;
    } else {
      const stringToNumber = Number(capacity);
      const body = { capacity: stringToNumber };
      fetchCreate(body);
    }
  });
  console.log({ value });
}
//
//POST new batteries (interaction with api)
async function fetchCreate(body) {
  const fetchResponse = await fetch(`${url}/batteries`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // save the response
  const response = await fetchResponse.json();
  console.log(response);
  return response;
}
/////////////////////////// End of POST new batteries /////////////////////////////
