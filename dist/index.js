"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const grammy_1 = require("grammy");
const controller_1 = require("./controller/controller");
const bot = new grammy_1.Bot('5805181734:AAEQxmKwkssJU7cHk7N8RmQHVtD2TM1DxHI');
exports.bot = bot;
bot.command("start", controller_1.controller.startReply);
// bot.on("message", controller.inputName);
bot.on('message', controller_1.controller.inputPhone_numebr);
bot.start();
