// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', '.tmp/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
//

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-3-95-130-249.compute-1.amazonaws.com',
        port: 5432,
        database: 'd2j34n8h85ad0m',
        username: 'knlnvndimzmqhv',
        password: 'fafd38a6ac069a40c3c1483f44e5c996bf1efc0660f6b80803e1cd3e3efa0d6f',
      },
      options: {},
    },
  },
});
