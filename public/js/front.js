const url = 'http://localhost:3000';

//get all batteries events
const getBatteries = document.querySelector('#getPack');
const creatingDOMelement = document.querySelector('#creatingDOMelement');
getBatteries.addEventListener('click', getAll);
//delete your pack events
const deletePack = document.querySelector('#deletePack');
deletePack.addEventListener('click', deleteAll);
//add a new table
const addTable = document.querySelector('#submitYourPack');
// get ideal Pack events
// const getIdealPack = document.querySelector('#getYourPack');
// const creatingDOMelement2 = document.querySelector('#creatingDOMelement2');
// getIdealPack.addEventListener('click', getAll);

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

// creates the pack info element space in the dom
function hello(id, capacity) {
  const list = document.createElement('li');
  list.innerHTML = `<p>ID:${id}, Capacity:${capacity}</p>`;
  creatingDOMelement.appendChild(list);

  console.log('get all batteries button pressed');
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

const form = document.querySelector('#submitform');
form.addEventListener('submit', handlerForm);
