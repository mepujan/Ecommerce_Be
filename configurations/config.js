import dotenv from 'dotenv';

dotenv.config();

const config = {
    port : process.env.PORT,
    database_string :process.env.DATABASE_CONNECTION_STRING,
    host:process.env.HOST,
    secret_key : process.env.SECRET_KEY
}

export default config;
