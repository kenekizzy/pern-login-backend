const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ebube2003",
    host: "localhost",
    database: "registration",
    port: 5432
});

module.exports = pool;