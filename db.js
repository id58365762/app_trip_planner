const pgp = require('pg-promise')({
schema: 'tp',
});
const cn = {
host: 'localhost',
port: 5432,
database: 'postgres',
//schema: 'tp',
user: 'tp_api_user',
password: 'postgre',
max: 30 // use up to 30 connections
};
const db = pgp(cn);
export default db;