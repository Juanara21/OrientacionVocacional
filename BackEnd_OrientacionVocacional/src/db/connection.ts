import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import pg from "pg"

dotenv.config();
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DATABASE_URL
} = process.env;

// if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
//   throw new Error('Error al obtener credenciales de la DATABASE');
// }


// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    
  //  host: DB_HOST,
  
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL no está definido en las variables de entorno');
  }
  
  const sequelize = new Sequelize(DATABASE_URL, {
    
    dialect: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
        
      }
    }
  });
  

export default sequelize;
