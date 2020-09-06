require('dotenv/config');

console.log('NODE_ENV: ' + process.env.NODE_ENV);

module.exports = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: 5432,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  entities: [
    process.env.NODE_ENV === 'development'
      ? './src/models/*.ts'
      : './dist/models/*.js',
  ],
  migrations: [
    process.env.NODE_ENV === 'development'
      ? './src/database/migrations/*.ts'
      : './dist/database/migrations/*.js',
  ],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
