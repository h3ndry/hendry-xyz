const parse = require('pg-connection-string').parse;

const { host, port, database, user, password } = parse(process.env.DATABASE_URL);
const config = parse(process.env.DATABASE_URL);

console.log( host, port, database, user, password, parse )

// console.log(host)

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
 
