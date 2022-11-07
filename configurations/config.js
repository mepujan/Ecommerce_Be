import dotenv from 'dotenv';

dotenv.config();

const config = {
    port : process.env.PORT,
    database_string :process.env.DATABASE_CONNECTION_STRING,
    host:process.env.HOST
}

export default config;
