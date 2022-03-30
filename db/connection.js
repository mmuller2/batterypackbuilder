import pg from 'pg';

//code below automatically imports user/host/etc from the .env file
const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

//line below commented was part of original express install
//export default pool;

//added to test to see if it works
export default function query(text, params) {
  return pool.query(text, params);
}
