"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const question_1 = __importDefault(require("../routes/question"));
const career_1 = __importDefault(require("../routes/career"));
const answer_1 = __importDefault(require("../routes/answer"));
const sesion_1 = __importDefault(require("../routes/sesion"));
const reportesUser_1 = __importDefault(require("../routes/reportesUser"));
const cors_1 = __importDefault(require("cors"));
const associations_1 = require("./associations");
const user_2 = require("../controllers/user"); // Ajusta la importación según tu estructura
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewaires();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/answer', answer_1.default);
        this.app.use('/api/career', career_1.default);
        this.app.use('/api/question', question_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/sesion', sesion_1.default);
        this.app.use('/api/reportes', reportesUser_1.default);
    }
    midlewaires() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)(
        // { origin: 'front-end-orientacion-vocacional.vercel.app'}
        ));
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield associations_1.Career.sync();
                yield associations_1.User.sync();
                yield associations_1.Question.sync();
                yield associations_1.Answer.sync();
                yield (0, user_2.createDefaultUser)();
            }
            catch (error) {
                console.log('Problem connecting to the database ', error);
            }
        });
    }
}
exports.default = Server;
