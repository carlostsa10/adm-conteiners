const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postegres',
      password : 'tavares45',
      database : 'operacional_db'
    },
    
});
module.exports = knex

