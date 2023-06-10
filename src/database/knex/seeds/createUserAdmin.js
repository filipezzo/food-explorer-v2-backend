const { hash } = require("bcryptjs");

exports.seed = async function(knex) {
  await knex("users").del();
  await knex("users").insert([
    {
      name: "admin",
      email: "admin@admin.com",
      password: await hash("010101", 8),
      isAdmin: true,
    },
  ]);
};