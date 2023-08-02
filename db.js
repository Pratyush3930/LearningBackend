// const {Client} = require('pg');

// const client = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "asaf12k9",
//     database: "myContacts"
// })

// client.connect();

// client.query(`Select * from contacts` , (err , res) =>{
//     if(!err){
//         console.log(res.rows);
//     }else 
//     {
//         console.log(err.message);
//     }
//     client.end;


// the above code is from a different video

const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'asaf12k9',
    port: 5432
});

module.exports = pool;