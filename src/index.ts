import {Bot, InlineKeyboard, Keyboard} from "grammy"
import { controller } from "./controller/controller";
import { Menu } from "@grammyjs/menu";
import { pool } from "./db/db";
import express, { text, urlencoded } from 'express';
import bodyParser from 'body-parser';
import { Orders } from "./interface/Orders.interface";
import { transformInitData, validate } from "./WebAppData";

const bot = new Bot('5805181734:AAEQxmKwkssJU7cHk7N8RmQHVtD2TM1DxHI')
const menu = new Menu("dynamic");

const app = express();

app.use(urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static('public'));

app.post('/api/sendAnswer', async (req, res) => {
  const data= req.body;
  // pool.query('INSERT INTO products(title, price) values(?, ?)', [data.title, data.price])
  res.send('post qilindi')
  // await bot.apis.sendMessage(12345, `${data}`);
  console.log(data);
  let initData = data._auth;
  if (!initData) {
    res.sendStatus(400).end();
    return;
  }

  // Check authorization with Telegram
  initData = transformInitData(initData);
  const isValid = await validate(initData, '5805181734:AAEQxmKwkssJU7cHk7N8RmQHVtD2TM1DxHI');
  if (!isValid) {
    res.status(403).end();
    return;
  }

  await bot.api.answerWebAppQuery(initData.query_id, {
    type: 'article',
    id: '1',
    title: 'Title', // empty
    input_message_content: {
      message_text: `Right answers: ${data}`,
    },
  });
  console.log(data);
  

});


const magicButton = (keyboard: any): Keyboard | InlineKeyboard =>
  new keyboard().webApp('💫 View Food!', 'https://64ba2d5f8180e6526e433357--tangerine-buttercream-106903.netlify.app/');

    


menu
.url("view food", "https://64ba2d5f8180e6526e433357--tangerine-buttercream-106903.netlify.app/").row()


bot.command("start",async (ctx)=>{

    const keyboard = magicButton(InlineKeyboard);

    const keyboard1 = magicButton(Keyboard)
    const db = await pool
    const user_id = ctx.message?.from.id;
    const first_name = ctx.message?.from.first_name;
    const username=ctx.message?.from.username;
    
    await ctx.reply("Menu bilan tanishishingiz mumkin.", {
        reply_markup: keyboard,
      
    });

    await ctx.reply('menu', {
      reply_markup: keyboard1,
    });

}); 



bot.on(':web_app_data', async (ctx:any)=>{
  const data = ctx.message.web_app_data;
  return ctx.reply(Hisobla(data.data));
  
})
 
const Hisobla = (malumot: string | any[])=>{
  // let summ =0
  // let hisob = ''
  // for(let i=0;i<malumot.length;i++){
  //   summ=summ+malumot[i].price;
  //   hisob = hisob+malumot[i].title+':'+malumot[i].price+','
  // }

  // hisob=hisob+summ

  return malumot
}



app.listen(3004, () => {
  console.log('Server started');
});
bot.start() 

export {bot}
