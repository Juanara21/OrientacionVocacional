"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DATABASE_URL } = process.env;
// if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
//   throw new Error('Error al obtener credenciales de la DATABASE');
// }
// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//  host: DB_HOST,
if (!DATABASE_URL) {
    throw new Error('DATABASE_URL no está definido en las variables de entorno');
}
const sequelize = new sequelize_1.Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
exports.default = sequelize;
