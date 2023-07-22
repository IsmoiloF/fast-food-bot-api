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
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const db_1 = require("../db/db");
const index_1 = require("../index");
function startReply(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const startText = 'Assalomu alaykum FastFood delivery botimizga hush kelibsiz bu bot yordamida siz ozingiz yoqtirgan ovqatlarni buyurtma qilishingiz mumkin';
            const Username = ctx.message.from.first_name;
            const db = yield db_1.pool;
            const name = ctx.message.from.username;
            const userID = ctx.message.chat.id;
            console.log(userID);
            ctx.reply(startText);
            ctx.reply('Iltimos ismingizni kiriting.');
            db.query('SELECT * FROM users;', (err, result, filed) => {
                // console.log(result[0])
                // console.log(userID)
                // console.log(result.length)
                let isUser = true;
                for (let i = 0; i < result.length; i++) {
                    if (userID == result[i].userID) {
                        isUser = true;
                    }
                    else {
                        isUser = false;
                    }
                }
                console.log(isUser);
            });
        }
        catch (err) {
            console.log(err);
        }
    });
}
function inputName(ctx) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ism = (_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text;
            const db = yield db_1.pool;
            const userID = ctx.message.from.id;
            const name = ctx.message.text;
            const Username = ctx.message.from.username;
            db.query('INSERT INTO users(UserID, name, username) VALUES(?, ?, ?)', [userID, name, Username]);
            ctx.reply('Iltimos telfon raqmingizni kiriting.');
        }
        catch (error) {
            console.log(error);
        }
    });
}
function inputPhone_numebr(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var option = {
                "parse_mode": "Markdown",
                "reply_markup": {
                    "one_time_keyboard": true,
                    "keyboard": [[{
                                text: "My phone number",
                                request_contact: true
                            }]]
                }
            };
            index_1.bot.api.sendMessage(ctx.chat.id, "How can we contact you?", option).then(() => {
                // handle user phone
            });
            ctx.reply('salom');
        }
        catch (error) {
            console.log(error);
        }
    });
}
const controller = {
    startReply,
    inputName,
    inputPhone_numebr,
};
exports.controller = controller;
