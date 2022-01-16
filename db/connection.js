import pg from 'pg';

// sql server info
const pool = new pg.Pool({
  user: 'wcyrnynjfdpyal',
  host: 'ec2-79-125-93-182.eu-west-1.compute.amazonaws.com',
  database: 'dcdjvl07s55qvt',
  password: 'f29514f117399789ae371a1da30d0d7505933857eced3b929e346fe9b1c13223',
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

//line below commented was part of original express install
//export default pool;

//added to test to see if it works
export default function query(text, params) {
  return pool.query(text, params);
}
