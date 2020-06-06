import knex from "knex";

const connection = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "toor",
    database: "nlw1",
  },
});

export default connection;
