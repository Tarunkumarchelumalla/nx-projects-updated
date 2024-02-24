import * as dotenv from "dotenv";
dotenv.config();

enum CONFIG {
  DEMO = "demo",
}

interface Environment {
  DATABASE_SCHEMA: string;
  DATABASE_CONFIG: string;
  JWTKEY: string;
  TOKEN_EXPIRATION: string;
  SECRET_KEY: string;
  PORT: number;
}

const DATA_BASE: string = CONFIG.DEMO;
console.log(DATA_BASE);
const DB_CONFIG: Environment = {
  DATABASE_SCHEMA: "",
  DATABASE_CONFIG: "",
  JWTKEY: "",
  TOKEN_EXPIRATION: "",
  SECRET_KEY: "",
  PORT: 0,
};

export const USER_MANAGEMENT_SCHEMA = "test-table";

switch (DATA_BASE) {
  case CONFIG.DEMO:
    DB_CONFIG.DATABASE_SCHEMA = "table";
    DB_CONFIG.DATABASE_CONFIG = `localhost`;
    DB_CONFIG.JWTKEY = "404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970";
    DB_CONFIG.TOKEN_EXPIRATION = "1w";
    DB_CONFIG.SECRET_KEY = "DEMO";
    break;
}

export { DB_CONFIG };
