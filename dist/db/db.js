"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const pool = mysql2_1.default.createPool({
    host: "127.0.0.1",
    database: "Food",
    user: "root",
    password: "password",
    port: 3306
});
exports.pool = pool;
