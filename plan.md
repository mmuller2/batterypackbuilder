Install pertinent dependencies:

- npx express-generator-esmodules
  (Chris express with updated changes)
- npm i pg
  (node-postgres is a collection of node.js modules for interfacing with your PostgreSQL database)
- npm i -y
- npm i --save-dev nodemon
  (nodemon, tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected)

General idea:
-To create a lithium battery pack calculator based on cell capacity and if possible IR

- This will be based on Lithium polimer batteries;
  Nominal voltage per cell = 3.7v
  Max charged voltage per cell = 4.2v
  Capacities will range from 0 to 3500 mha per cell.

- The app will take as many cell capacities and IR measuremet as the user wants

- The user will then specify what configuration he is looking for; Series (add voltage) and parallel (add capacity)
  - EG: 5S4P
    - Where 5 cells in series (5S) will add up to a pack voltage of 18.5v(nomainal) and 21v(fully charged)
    - Where 4 cells in parallel (4P) will add the capacities the user measured and typed in

Plan:

- create database files/dep

  - populate db forlder
    - scripts ( create and populate table)
    - conncetion.js (server connection)

- create pertinent functions:
  - function that returns an array that contains the highest capacity cells
  - set up a delete database function
  - the fnction needs to return only the amount of id's (capacities picked by user)
  - create a front end that takes an array as info
  - create choices for battery configuration:
    - 1 to 10s
    - 1 to 5p
