import pg from 'pg';

// sql server info
const pool = new pg.Pool({
  user: 'vljmxocvdveugv',
  host: 'ec2-63-34-223-144.eu-west-1.compute.amazonaws.com',
  database: 'db31a6uq9bpnnu',
  password: '3848e5db3df5a4a8a0528576c58ab11b806070d95e9bcd3e426899b234389d66',
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

//line below commented was part of original express install
//export default pool;

//added to test to see if it works
export default function query(text, params) {
  return pool.query(text, params);
}
