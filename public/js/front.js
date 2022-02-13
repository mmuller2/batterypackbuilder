const url = 'http://localhost:3000';

//DOM manipulation
const getBatteries = document.querySelector('#getPack');
const creatingDOMelement = document.querySelector('#creatingDOMelement');
const creatingDOMelement2 = document.querySelector('#creatingDOMelement2');
const getIdealPack = document.querySelector('#three');
const inputValue = document.querySelector('#inputValue');
getBatteries.addEventListener('click', getAll);
getIdealPack.addEventListener('click', getIdeal);
//
// creates element space in the DOM (get all batteries)
function hello(id, capacity) {
  const list = document.createElement('li');
  list.innerHTML = `<p>ID:${id}, Capacity:${capacity}</p>`;
  creatingDOMelement.appendChild(list);
  console.log('get all batteries button pressed');
}
// creates element space in the DOM for get picked pack (24/01/22)
function pickedSpot(id, capacity) {
  const pickedlist = document.createElement('li');
  pickedlist.innerHTML = `<p>ID:${id}, Capacity:${capacity}</p>`;
  creatingDOMelement2.appendChild(pickedlist);
  console.log('get best pack button pressed');
}
//
//delete your pack events
const deletePack = document.querySelector('#deletePack');
deletePack.addEventListener('click', deleteAll);
//
//add a new table
const addTable = document.querySelector('#submitYourPack');
const form = document.querySelector('#submitform');
form.addEventListener('submit', handlerForm);

// get picked Pack functions
async function getIdeal() {
  // destroy container so it updates pack everytime the button is clicked
  // const containerDiv = document.querySelector('#div2');
  // const container = document.querySelector('#creatingDOMelement2');
  // containerDiv.remove(container);
  // containerDiv.createElement('ol');
  //above creates the container
  const response = await fetch(`${url}/batteries/ideal/${inputValue.value}`);
  const { payload } = await response.json();
  console.log(payload);
  //adds and maps through the new pack (array) and sends it to the dom
  const pickedArr = payload.map((input) => {
    pickedSpot(input.id, input.capacity);
  });
}

// get all batteries functions
//gets the info from /batteries
async function getAll() {
  const response = await fetch(`${url}/batteries`);
  const { payload } = await response.json();
  console.log(payload);
  const newArr = payload.map((input) => {
    hello(input.id, input.capacity);
  });
}

//delete your pack functions
async function deleteAll() {
  const response = await fetch(`${url}/batteries`, { method: 'DELETE' })
    .then((response) => response.json())
    .then((data) => (window.location.href = data.redirect));
}

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
