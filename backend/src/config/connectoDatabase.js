const { Sequelize } = require("sequelize");
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_POST,
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
    },
  }
);
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfullyss.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export default connection;
