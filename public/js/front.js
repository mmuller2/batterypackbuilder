// query select button
// query select location of .. in the dom
//add event listener (click) to do x once button is pressed
//

const url = 'http://localhost:3000';
//
//DOM manipulation
const getBatteries = document.querySelector('#getPack');
const creatingDOMelement = document.querySelector('#creatingDOMelement');
const creatingDOMelement2 = document.querySelector('#creatingDOMelement2');
const getIdealPack = document.querySelector('#three');
const inputValue = document.querySelector('#inputValue');
getBatteries.addEventListener('click', getAll);
getIdealPack.addEventListener('click', getIdeal);
//delete your pack events
const deletePack = document.querySelector('#deletePack');
deletePack.addEventListener('click', deleteAll);
//
//
///////////////////////// Batt by Id ////////////////////////
// gets the number input for get battery by id
const inputValueById = document.querySelector('#inputValueById');
// creates DOM space for battery by id
const creatingDOMelement3 = document.querySelector('#creatingDOMelement3');
// event listener and button  to call battery by id
const getBattId = document.querySelector('#getPackId');
getBattId.addEventListener('click', getBattById);
//
// get battery by id
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
//////////////////////////
//
//gets the info from /batteries
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
//
// get picked Pack functions
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
//
//add a new table
const addTable = document.querySelector('#submitYourPack');
const form = document.querySelector('#submitform');
form.addEventListener('submit', handlerForm);
//
//delete your pack functions
async function deleteAll() {
  const response = await fetch(`${url}/batteries`, { method: 'DELETE' })
    .then((response) => response.json())
    .then((data) => (window.location.href = data.redirect));
}
//
//Intercept the flowFrom:
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
//CREATE new batteries
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
