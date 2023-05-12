require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_HOST =
  process.env.DB_HOST || "bmsaoilcvwbfmbmjv2co-mysql.services.clever-cloud.com";
const DB_USER = process.env.DB_USER || "uc8zt1zb41h6b8uy";
const DB_PASSWORD = process.env.DB_PASSWORD || "HsxENArK0dWXHGTdF4fe";
const DB_DATABASE = process.env.DB_DATABASE || "bmsaoilcvwbfmbmjv2co";
const DB_PORT = process.env.DB_PORT || 3306;

module.exports = {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT,
};

